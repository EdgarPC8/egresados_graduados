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

const router = Router();

router.post("/addAcademicTraining", addAcademicTraining);
router.get("/getAllAcademicTraining", getAllAcademicTraining);
router.put("/editAcademicTraining/:academicId", editAcademicTraining);
router.delete("/deleteAcademicTraining/:academicId", deleteAcademicTraining);

router.post("/addTeachingExperience", addTeachingExperience);
router.get("/getAllTeachingExperience", getAllTeachingExperience);
router.put("/editTeachingExperience/:teachingId", editTeachingExperience);
router.delete(
  "/deleteTeachingExperience/:teachingId",
  deleteTeachingExperience
);

router.post("/addCoursesWorkshops", addCoursesWorkshops);
router.get("/getAllCoursesWorkshops", getAllCoursesWorkshops);
router.put("/editCoursesWorkshops/:courseId", editCoursesWorkshops);
router.delete("/deleteCoursesWorkshops/:courseId", deleteCoursesWorkshops);

router.post("/addIntellectualProduction", addIntellectualProduction);
router.get("/getAllIntellectualProduction", getAllIntellectualProduction);
router.put(
  "/editIntellectualProduction/:intellectualId",
  editIntellectualProduction
);
router.delete(
  "/deleteIntellectualProduction/:intellectualId",
  deleteIntellectualProduction
);

router.post("/addBooks", addBooks);
router.get("/getAllBooks", getAllBooks);
router.put("/editBooks/:bookId", editBooks);
router.delete("/deleteBooks/:bookId", deleteBooks);

router.post("/addAcademicProfessionalMerits", addAcademicProfessionalMerits);
router.get(
  "/getAllAcademicProfessionalMerits",
  getAllAcademicProfessionalMerits
);
router.put(
  "/editAcademicProfessionalMerits/:meritId",
  editAcademicProfessionalMerits
);
router.delete(
  "/deleteAcademicProfessionalMerits/:meritId",
  deleteAcademicProfessionalMerits
);

router.post("/addLanguages", addLanguages);
router.get("/getAllLanguages", getAllLanguages);
router.put("/editLanguages/:languageId", editLanguages);
router.delete("/deleteLanguages/:languageId", deleteLanguages);

router.post("/addProfessionalExperience", addProfessionalExperience);
router.get("/getAllProfessionalExperience", getAllProfessionalExperience);
router.put(
  "/editProfessionalExperience/:experienceId",
  editProfessionalExperience
);
router.delete(
  "/deleteProfessionalExperience/:experienceId",
  deleteProfessionalExperience
);

export default router;
