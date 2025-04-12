import { Request, Response } from "express";
import prisma from "../../config/prisma";
import bcrypt from "bcryptjs";
import { error } from "console";
import { stat } from "fs";

export const getCurrentUser = async (req: Request, res: Response) => {
  const user = (req as any).user;

  const response = {
    success: true,
    statusCode: 200,
    message: "User fetched successfully",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    },
  };
  res.status(200).json(response);
};

export const createTrainer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      let message;
      let field;

      if (!name) {
        message = "name is required";
        field = "name";
      } else if (!email) {
        message = "email is required";
        field = "email";
      } else if (!password) {
        message = "password is required";
        field = "password";
      }

      res.status(400).json({
        success: false,
        message,
        errorDetails: {
          field,
          message,
        },
      });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "User already exists",
        errorDetails: {
          field: "email",
          message: "user with this email already exists",
        },
      });
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
      success: true,
      statusCode: 201,
      message: "Trainer created successfully",
      data: {
        user: {
          id: trainer.id,
          name: trainer.name,
          email: trainer.email,
          role: trainer.role,
        },
      },
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

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Trainers fetched successfully",
      data: {
        users: trainers,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
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

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Trainees fetched successfully",
      data: { users: trainees },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
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
      success: true,
      statusCode: 200,
      message: "Profile updated successfully",
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
  }
};
