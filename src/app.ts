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

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message:
      "Welcome to the Gym Class Scheduling & Membership Management System API",
    version: "1.0.0",
    availableRoutes: [
      {
        group: "Authentication APIs",
        routes: [
          { method: "POST", path: "/api/auth/signup" },
          { method: "POST", path: "/api/auth/login" },
        ],
      },
      {
        group: "User Management APIs",
        routes: [
          { method: "POST", path: "/api/users/trainers" },
          { method: "GET", path: "/api/users/trainers" },
          { method: "GET", path: "/api/users/trainees" },
          { method: "GET", path: "/api/users/profile" },
          { method: "PUT", path: "/api/users/profile" },
        ],
      },
      {
        group: "Class Scheduling APIs",
        routes: [
          { method: "POST", path: "/api/schedules" },
          { method: "GET", path: "/api/schedules" },
          { method: "GET", path: "/api/schedules/:id" },
          { method: "PUT", path: "/api/schedules/:id" },
          { method: "DELETE", path: "/api/schedules/:id" },
        ],
      },
      {
        group: "Booking Management APIs",
        routes: [
          { method: "POST", path: "/api/bookings" },
          { method: "GET", path: "/api/bookings" },
          { method: "DELETE", path: "/api/bookings/:id" },
        ],
      },
    ],
  });
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
