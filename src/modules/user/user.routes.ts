import { Router } from "express";
import { protect } from "../../middleware/protect";
import {
  createTrainer,
  getAllTrainees,
  getAllTrainers,
  getCurrentUser,
  updateUserProfile,
} from "./user.controller";
import { restrictTo } from "../../middleware/restrictTo";

const router = Router();

router.get("/me", protect, getCurrentUser);
router.put("/profile", protect, updateUserProfile);
router.post("/trainers", protect, restrictTo("Admin"), createTrainer);
router.get("/trainers", protect, restrictTo("Admin"), getAllTrainers);
router.get("/trainees", protect, restrictTo("Admin"), getAllTrainees);

export default router;
