import express from "express";
import { protect } from "../../middleware/protect";
import { restrictTo } from "../../middleware/restrictTo";
import {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
} from "./schedule.controller";

const router = express.Router();

router.post("/", protect, restrictTo("Admin"), createSchedule);
router.get("/", protect, getSchedules);
router.get("/:id", protect, getScheduleById);
router.put("/:id", protect, restrictTo("Admin"), updateSchedule);
router.delete("/:id", protect, restrictTo("Admin"), deleteSchedule);

export default router;
