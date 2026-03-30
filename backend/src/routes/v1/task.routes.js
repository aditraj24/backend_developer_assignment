import express from "express";
import protect from "../../middlewares/auth.middleware.js";
import validateRequest from "../../middlewares/validate.middleware.js";
import {
  createTaskValidation,
  updateTaskValidation,
} from "../../validations/task.validation.js";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../../controllers/task.controller.js";

const router = express.Router();

router.use(protect);

router.post("/", createTaskValidation, validateRequest, createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskValidation, validateRequest, updateTask);
router.delete("/:id", deleteTask);

export default router;