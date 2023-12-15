import { Router } from "express";
import {
  getAllProfessionals,
  addProfessional,
  getProfessionalsById,
} from "../controllers/ProfessionalsControllers.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";

const router = Router();

router.get("/getAllProfessionals", isAuthenticated, getAllProfessionals);
router.get(
  "/getProfessionalsById/:userId",
  isAuthenticated,
  getProfessionalsById
);
router.post("/addProfessional", isAuthenticated, addProfessional);

export default router;
