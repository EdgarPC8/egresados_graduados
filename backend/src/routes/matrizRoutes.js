import { Router } from "express";
import {
  getAllMatriz,
  addMatriz,
  deleteMatriz,
  getAllCareers,
getAllPeriods,
addCareer,
addPeriod,
editCareer,
editPeriod,
} from "../controllers/matrizController.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";

const router = Router();

router.get("/getAllCareers", isAuthenticated, getAllCareers);
router.get("/getAllPeriods", isAuthenticated, getAllPeriods);
router.get("/getAllMatriz", isAuthenticated, getAllMatriz);
router.post("/addMatriz", isAuthenticated, addMatriz);
router.post("/addCareer", isAuthenticated, addCareer);
router.post("/addPeriod", isAuthenticated, addPeriod);

router.delete("/:matrizId", isAuthenticated, deleteMatriz);

router.put("/editCareer/:careerId", isAuthenticated, editCareer);
router.put("/editPeriod/:periodId", isAuthenticated, editPeriod);



export default router;
