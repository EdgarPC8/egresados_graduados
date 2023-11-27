import { Router } from "express";
import {
  getAllProfessionals,
  addProfessional,
} from "../controllers/ProfessionalsControllers.js";

const router = Router();

router.get("/getAllProfessionals", getAllProfessionals);
router.post("/addProfessional", addProfessional);

export default router;
