import express, { Express } from "express";

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import scheduleRoutes from "./modules/schedule/schedule.routes";
import bookingsRoutes from "./modules/booking/booking.routes";

import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

// Mounted Routes
// Authentication Routes
app.use("/api/auth", authRoutes);
// User Routes
app.use("/api/users", userRoutes);

// Schedule Routes
app.use("/api/schedules", scheduleRoutes);

// Booking Routes
app.use("/api/bookings", bookingsRoutes);

export default app;
