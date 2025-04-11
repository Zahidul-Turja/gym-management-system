import { Router } from "express";
import { protect } from "../../middleware/protect";
import {
  createTrainer,
  getAllTrainers,
  getCurrentUser,
} from "./user.controller";
import { restrictTo } from "../../middleware/restrictTo";

const router = Router();

router.get("/me", protect, getCurrentUser);
router.post("/trainers", protect, restrictTo("Admin"), createTrainer);
router.get("/trainers", protect, restrictTo("Admin"), getAllTrainers);

export default router;
