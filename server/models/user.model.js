import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  status: {
    type: Boolean,
    default: 0,
  },
});

export default mongoose.model("User", UserSchema);
