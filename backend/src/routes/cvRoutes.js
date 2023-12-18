import { Router } from "express";
import {
  addAcademicTraining,
  editAcademicTraining,
  getAllAcademicTraining,
  deleteAcademicTraining,
  addTeachingExperience,
  editTeachingExperience,
  getAllTeachingExperience,
  deleteTeachingExperience,
  addCoursesWorkshops,
  editCoursesWorkshops,
  getAllCoursesWorkshops,
  deleteCoursesWorkshops,
  addIntellectualProduction,
  editIntellectualProduction,
  getAllIntellectualProduction,
  deleteIntellectualProduction,
  addBooks,
  editBooks,
  getAllBooks,
  deleteBooks,
  addAcademicProfessionalMerits,
  editAcademicProfessionalMerits,
  getAllAcademicProfessionalMerits,
  deleteAcademicProfessionalMerits,
  addLanguages,
  editLanguages,
  getAllLanguages,
  deleteLanguages,
  addProfessionalExperience,
  editProfessionalExperience,
  getAllProfessionalExperience,
  deleteProfessionalExperience,
} from "../controllers/cvController.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";

const router = Router();

router.post("/addAcademicTraining", isAuthenticated, addAcademicTraining);
router.get("/getAllAcademicTraining", isAuthenticated, getAllAcademicTraining);
router.put(
  "/editAcademicTraining/:academicId",
  isAuthenticated,
  editAcademicTraining
);
router.delete(
  "/deleteAcademicTraining/:academicId",
  isAuthenticated,
  deleteAcademicTraining
);

router.post("/addTeachingExperience", isAuthenticated, addTeachingExperience);
router.get(
  "/getAllTeachingExperience",
  isAuthenticated,
  getAllTeachingExperience
);
router.put(
  "/editTeachingExperience/:teachingId",
  isAuthenticated,
  editTeachingExperience
);
router.delete(
  "/deleteTeachingExperience/:teachingId",
  deleteTeachingExperience
);

router.post("/addCoursesWorkshops", isAuthenticated, addCoursesWorkshops);
router.get("/getAllCoursesWorkshops", isAuthenticated, getAllCoursesWorkshops);
router.put(
  "/editCoursesWorkshops/:courseId",
  isAuthenticated,
  editCoursesWorkshops
);
router.delete(
  "/deleteCoursesWorkshops/:courseId",
  isAuthenticated,
  deleteCoursesWorkshops
);

router.post(
  "/addIntellectualProduction",
  isAuthenticated,
  addIntellectualProduction
);
router.get(
  "/getAllIntellectualProduction",
  isAuthenticated,
  getAllIntellectualProduction
);
router.put(
  "/editIntellectualProduction/:intellectualId",
  isAuthenticated,
  editIntellectualProduction
);
router.delete(
  "/deleteIntellectualProduction/:intellectualId",
  isAuthenticated,
  deleteIntellectualProduction
);

router.post("/addBooks", isAuthenticated, addBooks);
router.get("/getAllBooks", isAuthenticated, getAllBooks);
router.put("/editBooks/:bookId", isAuthenticated, editBooks);
router.delete("/deleteBooks/:bookId", isAuthenticated, deleteBooks);

router.post(
  "/addAcademicProfessionalMerits",
  isAuthenticated,
  addAcademicProfessionalMerits
);
router.get(
  "/getAllAcademicProfessionalMerits",
  isAuthenticated,
  getAllAcademicProfessionalMerits
);
router.put(
  "/editAcademicProfessionalMerits/:meritId",
  isAuthenticated,
  editAcademicProfessionalMerits
);
router.delete(
  "/deleteAcademicProfessionalMerits/:meritId",
  isAuthenticated,
  deleteAcademicProfessionalMerits
);

router.post("/addLanguages", isAuthenticated, addLanguages);
router.get("/getAllLanguages", isAuthenticated, getAllLanguages);
router.put("/editLanguages/:languageId", isAuthenticated, editLanguages);
router.delete("/deleteLanguages/:languageId", isAuthenticated, deleteLanguages);

router.post(
  "/addProfessionalExperience",
  isAuthenticated,
  addProfessionalExperience
);
router.get(
  "/getAllProfessionalExperience",
  isAuthenticated,
  getAllProfessionalExperience
);
router.put(
  "/editProfessionalExperience/:experienceId",
  isAuthenticated,
  editProfessionalExperience
);
router.delete(
  "/deleteProfessionalExperience/:experienceId",
  isAuthenticated,
  deleteProfessionalExperience
);

export default router;
