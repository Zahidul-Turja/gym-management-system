import { Request, Response, NextFunction } from "express";

export const restrictTo = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!roles.includes(user?.role)) {
      res.status(403).json({
        success: false,
        message: "Unauthorized access.",
        errorDetails: "You must be an admin to perform this action.",
      });
      return;
    }
    next();
  };
};
