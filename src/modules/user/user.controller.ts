import { Request, Response } from "express";

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
