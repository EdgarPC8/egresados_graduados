import { Router } from "express";
import {
  getRoles,
  getOneUser,
  updateDataUser,
  changePassword,
} from "../controllers/userController.js";
import { uploadUpdatePhoto } from "../middlewares/uploadPhotoMiddleware.js";

const router = new Router();

router.get("/roles", getRoles);
router.get("/:userId", getOneUser);
router.put("/:userId", uploadUpdatePhoto, updateDataUser);
router.put("/changePassword/:userId", changePassword);

export default router;
