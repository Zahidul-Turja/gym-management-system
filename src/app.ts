import express, { Express } from "express";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (_req, res) => {
  res.send("Gym Management System API is running 🚀");
});

// Mounted Routes
// Authentication Routes
app.use("/api/auth", authRoutes);
// User Routes
app.use("/api/users", userRoutes);

// Trainer Routes
app.use("/api/trainers");

// Admin Routes
// app.use("/api/admins");

export default app;
