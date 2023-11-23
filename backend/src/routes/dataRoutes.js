import { Router } from "express";
import { getData,setData } from "../controllers/dataController.js";

const router = Router();

router.post("/select", getData);
router.post("/insert", setData);

export default router;
