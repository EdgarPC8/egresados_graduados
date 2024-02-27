import { Router } from "express";
import { backup, updateDataBase } from "../controllers/configController.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";

const router = Router();

router.get("/backup", isAuthenticated, backup);
router.put("/updateDataBase", isAuthenticated, updateDataBase);

export default router;
