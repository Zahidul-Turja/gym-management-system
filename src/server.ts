import app from "./app";
import { connectDB } from "./config/db";

let dbConnected = false;

export default async function handler(req: any, res: any) {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }

  app(req, res);
}
