import User from "../models/user.model.js";
import { imageUploadUtil } from "../cloudinary.js";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  // console.log("User Register: ", req.body);
  const { fullName, email, password, confirmPassword, stClass, profile } =
    req.body;

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    // console.log("Result: ", result.url);

    const checkUser = await User.findOne({ email });

    //Check if user is already registered
    if (checkUser) {
      return res.json({ success: false, message: "User already exists!" });
    }

    //Creates schema for new user
    const newUser = new User({
      fullName,
      email,
      password,
      confirmPassword,
      class: stClass,
      profile: result.url,
    });

    //Save new user
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Registration successfull!",
      url: result.url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error occured" });
  }
};

export const userLogin = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Please register yourself first!",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
        fullName: user.fullName,
      },
      "CLIENT_SECRET_KEY"
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Loggeid in successfuly!",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error occured!" });
    console.log(error);
  }
};

export const logOut = async (req, res) => {
  try {
    const token = req.cookies.token;
    // console.log("token: ", token);
    console.log("loogout");
    res
      .clearCookie("token")
      .json({ success: true, message: "Logged out successfuly" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error occured!" });
    console.log(error);
  }
};
