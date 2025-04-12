import { Request, Response, NextFunction } from "express";

import prisma from "../config/prisma";
import jwt, { Secret } from "jsonwebtoken";
import { error } from "console";

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;

interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        success: false,
        message: "Not authorized, no token",
        errorDetails: "Token not provided",
      });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      res.status(401).json({
        success: false,
        statusCode: 404,
        message: "user not found",
        errorDetails: {
          field: "user",
          message: "User not found found with the provided token",
        },
      });
      return;
    }

    (req as any).user = user;

    return next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "unauthorized access!",
      errorDetails: "You must be logged in to access this resource",
    });
  }
};
