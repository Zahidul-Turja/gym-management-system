import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}

export default prisma;
