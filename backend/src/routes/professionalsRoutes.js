import { Router } from "express";
import {
  getAllProfessionals,
  addProfessional,
  getProfessionalsById,
} from "../controllers/ProfessionalsControllers.js";

const router = Router();

router.get("/getAllProfessionals", getAllProfessionals);
router.get("/getProfessionalsById/:userId", getProfessionalsById);
router.post("/addProfessional", addProfessional);

export default router;
