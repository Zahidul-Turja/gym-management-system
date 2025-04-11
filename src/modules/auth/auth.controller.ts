import { Request, Response } from "express";
import { signupService, loginService } from "../auth/auth.service";

export const signup = async (req: Request, res: Response) => {
  const result = await signupService(req.body);
  res.status(201).json(result);
};

export const login = async (req: Request, res: Response) => {
  const result = await loginService(req.body);
  res.status(200).json(result);
};
