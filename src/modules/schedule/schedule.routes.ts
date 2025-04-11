import express from "express";
import { protect } from "../../middleware/protect";
import { restrictTo } from "../../middleware/restrictTo";
import { createSchedule } from "./schedule.controller";

const router = express.Router();

router.post("/", protect, restrictTo("Admin"), createSchedule);

export default router;
