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

export const getAllTrainers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const trainers = await prisma.user.findMany({
      where: { role: "Trainer" },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json(trainers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getAllTrainees = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const trainees = await prisma.user.findMany({
      where: { role: "Trainee" },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json(trainees);
  } catch (err) {
    console.error("Error fetching trainees:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const updateUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = (req as any).user;
    const { name, email } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        name: name || user.name,
        email: email || user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
};
