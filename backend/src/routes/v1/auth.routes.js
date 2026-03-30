import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../../controllers/auth.controller.js";
import validateRequest from "../../middlewares/validate.middleware.js";
import {
  registerValidation,
  loginValidation,
} from "../../validations/auth.validation.js";
import protect from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerValidation, validateRequest, registerUser);
router.post("/login", loginValidation, validateRequest, loginUser);
router.get("/me", protect, getMe);

export default router;