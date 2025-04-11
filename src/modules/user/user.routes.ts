import { Router } from "express";
import { protect } from "../../middleware/protect";
import { createTrainer, getCurrentUser } from "./user.controller";
import { restrictTo } from "../../middleware/restrictTo";

const router = Router();

router.get("/me", protect, getCurrentUser);
router.post("/trainers", protect, restrictTo("Admin"), createTrainer);

export default router;
