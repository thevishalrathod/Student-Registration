import { Router } from "express";
import { changeStudentStatus, getStudents } from "../controllers/admin.controller.js";
const router = Router();

router.get("/get-students", getStudents);
router.patch("/change-status", changeStudentStatus);

export default router;
