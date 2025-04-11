import { Request, Response } from "express";
import prisma from "../../config/prisma";
import bcrypt from "bcryptjs";

export const getCurrentUser = async (req: Request, res: Response) => {
  const user = (req as any).user;
  res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  });
};

export const createTrainer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const trainer = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "Trainer",
      },
    });

    res.status(201).json({
      id: trainer.id,
      name: trainer.name,
      email: trainer.email,
      role: trainer.role,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};
