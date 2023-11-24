import { Router } from "express";
import {
  getAllProfessionals,
  addProfessional,
} from "../controllers/ProfessionalsControllers.js";

const router = Router();

router.get("/", getAllProfessionals);
router.post("/", addProfessional);

export default router;
