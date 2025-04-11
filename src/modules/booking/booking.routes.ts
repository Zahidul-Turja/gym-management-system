import { Router } from "express";
import { protect } from "../../middleware/protect";
import {
  bookClass,
  deleteMyBooking,
  getMyBookings,
} from "./booking.controller";

const router = Router();

router.post("/:scheduleId", protect, bookClass);
router.get("/my-bookings", protect, getMyBookings);
router.delete("/my-bookings/:id", protect, deleteMyBooking);

export default router;
