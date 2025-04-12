import prisma from "../../config/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt";
import { error } from "console";

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
      statusCode: 403,
      errorDetails: {
        field: "email",
        message: "User already exists with this email.",
      },
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

  const res = {
    success: true,
    statusCode: 201,
    message: "User created successfully",
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  };

  return res;
};

export const loginService = async ({ email, password }: AuthInput) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return {
      success: false,
      message: "Invalid credentials",
      statusCode: 404,
      errorDetails: {
        field: "email",
        message: "User not found",
      },
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      success: false,
      message: "Invalid credentials",
      statusCode: 401,
      errorDetails: {
        message: "Invalid credentials, email or password is incorrect",
      },
    };
  }

  const token = generateToken(user.id, user.role);
  const res = {
    success: true,
    statusCode: 200,
    message: "Login successful",
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  };

  return res;
};
