import cloudinary from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dvkuhwk1a",
  api_key: "587361972322239",
  api_secret: "BfBH9W6lCoQwvubeFM3Bb5NI3XQ",
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
