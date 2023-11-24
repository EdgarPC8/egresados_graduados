import { Router } from "express";
import { getAllStudents,insertStudent } from "../controllers/studentController.js";

const router = Router();

router.get("/students", getAllStudents);
router.post("/insertStudent", insertStudent);

export default router;
