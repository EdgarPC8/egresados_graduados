import { Router } from "express";
import {
    backup,
    getAllTutorials,
addTutorials,
editTutorials,
deleteTutorials,
} from "../controllers/configController.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";


const router = Router();

router.get("/backup", isAuthenticated, backup);

router.get("/getAllTutorials", isAuthenticated, getAllTutorials);
router.post("/addTutorials", isAuthenticated, addTutorials);
router.put("/editTutorials/:tutorialId", isAuthenticated, editTutorials);
router.delete("/:tutorialsId", isAuthenticated, deleteTutorials);


export default router;
