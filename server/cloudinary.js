import cloudinary from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const storage = new multer.memoryStorage();

export const imageUploadUtil = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  console.log("Cloudinary result success");

  return result;
};

export const upload = multer({ storage });
