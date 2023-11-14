import { Router } from "express";
import { login, verifytoken } from "../controllers/authController.js";

const router = Router();

router.post("/login", login)
      .get("/verifytoken", verifytoken);

export default router;
