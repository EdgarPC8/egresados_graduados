import { Router } from "express";
import { getAllStudents } from "../controllers/studentController.js";

const router = Router();

router.get("/students", getAllStudents);

export default router;
