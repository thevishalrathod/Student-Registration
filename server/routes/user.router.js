import { Router } from "express";
import {
  logOut,
  userLogin,
  userRegister,
} from "../controllers/user.controller.js";
import { upload } from "../cloudinary.js";
const router = Router();

router.post("/register", upload.single("profile"), userRegister);
router.post("/login", userLogin);
router.get("/logout", logOut);

export default router;
