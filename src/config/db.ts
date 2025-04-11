import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

export default prisma;
