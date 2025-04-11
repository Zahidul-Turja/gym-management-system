import jwt, { Secret } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;

export const generateToken = (userId: string, role: string): string => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign({ id: userId, role }, JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string): jwt.JwtPayload | string => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.verify(token, JWT_SECRET);
};
