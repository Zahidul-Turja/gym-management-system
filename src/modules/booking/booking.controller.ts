import { Request, Response } from "express";
import prisma from "../../config/prisma";

export const bookClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    const scheduleId = req.params.scheduleId;

    if (user.role !== "Trainee") {
      res.status(403).json({ message: "Only trainees can book classes" });
      return;
    }

    const schedule = await prisma.classSchedule.findUnique({
      where: { id: scheduleId },
      include: {
        bookings: true,
      },
    });

    if (!schedule) {
      res.status(404).json({ message: "Class schedule not found" });
      return;
    }

    if (schedule.bookings.length >= schedule.maxTrainees) {
      res.status(400).json({ message: "This class is already full" });
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
      res
        .status(400)
        .json({ message: "You already have a class at this time" });
      return;
    }

    // Create new booking
    await prisma.booking.create({
      data: {
        traineeId: user.id,
        classScheduleId: schedule.id,
      },
    });

    res.status(201).json({ message: "Successfully booked the class" });
  } catch (error) {
    console.error("Error booking class:", error);
    res.status(500).json({ message: "Server error while booking class" });
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
      res.status(401).json({ message: "Unauthorized" });
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
    console.error(error);
    res.status(500).json({ message: "Server error", error });
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
      res.status(401).json({ message: "Unauthorized" });
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
      res
        .status(403)
        .json({ message: "You are not allowed to delete this booking" });
      return;
    }

    await prisma.booking.delete({
      where: { id: bookingId },
    });

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};
