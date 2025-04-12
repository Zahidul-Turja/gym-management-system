// src/server.ts
import app from "./app";
import { connectDB } from "./config/db";
import { Request, Response } from "express";
import { createServer } from "http";

// Create Vercel-compatible handler
let serverInitialized = false;

export default async function handler(req: Request, res: Response) {
  if (!serverInitialized) {
    await connectDB();
    serverInitialized = true;
  }

  // Delegate the request to Express
  app(req, res);
}
