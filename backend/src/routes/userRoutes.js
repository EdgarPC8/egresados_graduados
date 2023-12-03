import { Router } from "express";
import { getRoles } from "../controllers/userController.js";

const router = new Router();

router.get("/roles", getRoles);

export default router;
