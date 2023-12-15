import { Router } from "express";
import {
  getRoles,
  getOneUser,
  updateDataUser,
  changePassword,
} from "../controllers/userController.js";
import { uploadUpdatePhoto } from "../middlewares/uploadPhotoMiddleware.js";
import { isAuthenticated } from "../middlewares/authMiddelware.js";

const router = new Router();

router.get("/roles", getRoles);
router.get("/:userId", isAuthenticated, getOneUser);
router.put("/:userId", isAuthenticated, uploadUpdatePhoto, updateDataUser);
router.put("/changePassword/:userId", isAuthenticated, changePassword);

export default router;
