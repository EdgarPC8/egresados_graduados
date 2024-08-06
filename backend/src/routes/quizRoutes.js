import { Router } from "express";
import {
  getAllQuizzes,
  addQuiz,
  editQuiz,
  getOneQuiz,
  updateQuestionsQuiz,
} from "../controllers/quizController.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";

const router = Router();

router.post("/addQuiz", isAuthenticated, addQuiz);
router.put("/updateQuestions/:idQuiz", isAuthenticated, updateQuestionsQuiz);
router.get("/getAllQuizzes", isAuthenticated, getAllQuizzes);
router.get("/one/:idQuiz", isAuthenticated, getOneQuiz);
router.put("/editQuiz/:idQuiz", isAuthenticated, editQuiz);

// router.post("/", addLanguages);

export default router;
