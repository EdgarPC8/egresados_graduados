import { Router } from "express";
import {
    addAcademicTraining,editAcademicTraining,getAllAcademicTraining,deleteAcademicTraining,
    addTeachingExperience,editTeachingExperience,getAllTeachingExperience,deleteTeachingExperience,
    addCoursesWorkshops,editCoursesWorkshops,getAllCoursesWorkshops,deleteCoursesWorkshops,
    addIntellectualProduction,editIntellectualProduction,getAllIntellectualProduction,deleteIntellectualProduction,
    addBooks,editBooks,getAllBooks,deleteBooks,
    addAcademicProfessionalMerits,editAcademicProfessionalMerits,getAllAcademicProfessionalMerits,deleteAcademicProfessionalMerits,
    addLanguages,editLanguages,getAllLanguages,deleteLanguages,
    addProfessionalExperience,editProfessionalExperience,getAllProfessionalExperience,deleteProfessionalExperience,
} from "../controllers/cvController.js";



const router = Router();

router.post("/addAcademicTraining", addAcademicTraining);
router.get("/getAllAcademicTraining", getAllAcademicTraining);
router.put("/editAcademicTraining", editAcademicTraining);
router.delete("/deleteAcademicTraining/:taskId", deleteAcademicTraining);

router.post("/addTeachingExperience", addTeachingExperience);
router.get("/getAllTeachingExperience", getAllTeachingExperience);
router.put("/editTeachingExperience", editTeachingExperience);
router.delete("/deleteTeachingExperience/:taskId", deleteTeachingExperience);

router.post("/addCoursesWorkshops", addCoursesWorkshops);
router.get("/getAllCoursesWorkshops", getAllCoursesWorkshops);
router.put("/editCoursesWorkshops", editCoursesWorkshops);
router.delete("/deleteCoursesWorkshops/:taskId", deleteCoursesWorkshops);

router.post("/addIntellectualProduction", addIntellectualProduction);
router.get("/getAllIntellectualProduction", getAllIntellectualProduction);
router.put("/editIntellectualProduction", editIntellectualProduction);
router.delete("/deleteIntellectualProduction/:taskId", deleteIntellectualProduction);

router.post("/addBooks", addBooks);
router.get("/getAllBooks", getAllBooks);
router.put("/editBooks", editBooks);
router.delete("/deleteBooks/:taskId", deleteBooks);

router.post("/addAcademicProfessionalMerits", addAcademicProfessionalMerits);
router.get("/getAllAcademicProfessionalMerits", getAllAcademicProfessionalMerits);
router.put("/editAcademicProfessionalMerits", editAcademicProfessionalMerits);
router.delete("/deleteAcademicProfessionalMerits/:taskId", deleteAcademicProfessionalMerits);

router.post("/addLanguages", addLanguages);
router.get("/getAllLanguages", getAllLanguages);
router.put("/editLanguages", editLanguages);
router.delete("/deleteLanguages/:taskId", deleteLanguages);

router.post("/addProfessionalExperience", addProfessionalExperience);
router.get("/getAllProfessionalExperience", getAllProfessionalExperience);
router.put("/editProfessionalExperience", editProfessionalExperience);
router.delete("/deleteProfessionalExperience/:taskId", deleteProfessionalExperience);



export default router;
