import mongoose from "mongoose"

const MONGODB_URI = "mongodb://localhost:27017/practiceAPI";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.log(error);
  });
