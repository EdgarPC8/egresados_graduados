import { Router } from "express";
import {
    addAcademic_training,
    editAcademic_training,
    getAllAcademic_training,
    deleteAcademic_training,
    addTeaching_experience,
    getAllTeaching_experience,
    addCourses_workshops,
    getAllCourses_workshops,
    addIntellectual_production,
    getAllIntellectual_production,
    addBooks,
    getAllBooks,
    addAcademic_professional_merits,
    getAllAcademic_professional_merits,
    addLanguages,
    getAllLanguages,
    addProfessional_experience,
    getAllProfessional_experience,
} from "../controllers/cvController.js";

const router = Router();

// router.post("/", addLanguages);
router.post("/addAcademic_training", addAcademic_training);
router.get("/getAllAcademic_training", getAllAcademic_training);
router.put("/editAcademic_training", editAcademic_training);
router.delete("/deleteAcademic_training/:taskId", deleteAcademic_training);

router.post("/addTeaching_experience", addTeaching_experience);
router.get("/getAllTeaching_experience", getAllTeaching_experience);
router.post("/addCourses_workshops", addCourses_workshops);
router.get("/getAllCourses_workshops", getAllCourses_workshops);
router.post("/addIntellectual_production", addIntellectual_production);
router.get("/getAllIntellectual_production", getAllIntellectual_production);
router.post("/addBooks", addBooks);
router.get("/getAllBooks", getAllBooks);
router.post("/addAcademic_professional_merits", addAcademic_professional_merits);
router.get("/getAllAcademic_professional_merits", getAllAcademic_professional_merits);
router.post("/addLanguages", addLanguages);
router.get("/getAllLanguages", getAllLanguages);
router.post("/addProfessional_experience", addProfessional_experience);
router.get("/getAllProfessional_experience", getAllProfessional_experience);

export default router;
