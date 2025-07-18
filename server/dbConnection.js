import mongoose from "mongoose";

// const MONGODB_URI =
//   "mongodb+srv://rathodvishal016:goodluck@cluster0.irbjewe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const MONGODB_URI = "mongodb://localhost:27017/practiceAPI";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.log(error);
  });
