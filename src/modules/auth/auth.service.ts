import prisma from "../../config/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt";

interface AuthInput {
  name?: string;
  email: string;
  password: string;
}

export const signupService = async ({ name, email, password }: AuthInput) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name: name!,
      email,
      password: hashedPassword,
      role: "Trainee",
    },
  });

  const token = generateToken(user.id, user.role);
  return {
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  };
};

export const loginService = async ({ email, password }: AuthInput) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  const token = generateToken(user.id, user.role);
  return {
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  };
};
