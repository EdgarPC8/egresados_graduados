import { Router } from "express";
import {
    addResponses,
    getAllResponses,
    editResponses,
    deleteResponses,
} from "../controllers/quizController.js";

const router = Router();


router.post("/addResponses", addResponses);
router.get("/getAllResponses", getAllResponses);
router.put("/editResponses", editResponses);
router.delete("/deleteResponses/:taskId", deleteResponses);

// router.post("/", addLanguages);

export default router;
