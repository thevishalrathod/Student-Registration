import User from "../models/user.model.js";

export const getStudents = async (req, res) => {
  console.log("inside getStudents");
  try {
    const userList = await User.find({ role: "user" });

    if (!userList) {
      return res.json({ success: false, message: "No students found!" });
    }

    res.status(200).json({ success: true, userList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error occured" });
  }
};

export const changeStudentStatus = async (req, res) => {
  const { val, email } = req.body;
  console.log("email: ", email);

  try {
    const user = await User.findOne({ email });
    // console.log("User: ", user);

    if (!user) {
      return res.json({ success: false, message: "User not found!" });
    }

    await User.findOneAndUpdate({ email: email }, { status: val });

    res.status(200).json({
      success: true,
      message: "Status changed successfuly!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error occured" });
  }
};
