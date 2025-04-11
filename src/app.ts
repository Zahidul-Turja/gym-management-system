import express, { Express } from "express";
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
app.use("/api/auth");

export default app;
