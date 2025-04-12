import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { error } from "console";

export const bookClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    const scheduleId = req.params.scheduleId;

    if (user.role !== "Trainee") {
      res.status(403).json({
        success: false,
        statusCode: 403,
        message: "Only trainees can book classes",
        errorDetails: {
          field: "role",
          message: "You are not authorized to book classes",
        },
      });
      return;
    }

    const schedule = await prisma.classSchedule.findUnique({
      where: { id: scheduleId },
      include: {
        bookings: true,
      },
    });

    if (!schedule) {
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Class schedule not found",
        errorDetails: {
          field: "scheduleId",
          message: "No class schedule found with the provided ID",
        },
      });
      return;
    }

    if (schedule.bookings.length >= schedule.maxTrainees) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "This class is already full",
        errorDetails: {
          field: "classSchedule",
          message: "Class is already full",
        },
      });
      return;
    }

    // Check for time conflict
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        traineeId: user.id,
        classSchedule: {
          startTime: schedule.startTime,
        },
      },
    });

    if (conflictingBooking) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "You already have a class at this time",
        errorDetails: {
          field: "classSchedule",
          message: "You already have a class at this time",
        },
      });
      return;
    }

    // Create new booking
    await prisma.booking.create({
      data: {
        traineeId: user.id,
        classScheduleId: schedule.id,
      },
    });

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully booked the class",
      data: {
        classSchedule: schedule,
      },
    });
  } catch (error) {
    console.error("Error booking class:", error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error while booking class",
      errorDetails: {
        field: "server",
        message: "An error occurred while processing your request",
      },
    });
  }
};

export const getMyBookings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = (req as any).user;
    const userId = user?.id;

    if (!userId) {
      res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Unauthorized",
        errorDetails: {
          field: "authorization",
          message: "You are not authorized to view your bookings",
        },
      });
      return;
    }

    const bookings = await prisma.booking.findMany({
      where: {
        traineeId: userId,
      },
      include: {
        classSchedule: {
          include: {
            trainer: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: error,
    });
  }
};

export const deleteMyBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = (req as any).user;
    const userId = user?.id;
    const bookingId = req.params.id;

    if (!userId) {
      res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Unauthorized",
        errorDetails: {
          field: "authorization",
          message: "You are not authorized to delete this booking",
        },
      });
      return;
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }

    if (booking.traineeId !== userId) {
      res.status(403).json({
        success: false,
        statusCode: 403,
        message: "You are not allowed to delete this booking",
        errorDetails: {
          field: "authorization",
          message: "You are not authorized to delete this booking",
        },
      });
      return;
    }

    await prisma.booking.delete({
      where: { id: bookingId },
    });

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        success: false,
        statusCode: 500,
        message: "Server error",
        errordetails: err,
      });
  }
};
