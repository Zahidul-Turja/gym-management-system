import { Request, Response } from "express";
import prisma from "../../config/prisma";

export const createSchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, startTime, trainerId } = req.body;

    if (!date || !startTime || !trainerId) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const dateObj = new Date(date);

    // Limit check
    const existingSchedules = await prisma.classSchedule.findMany({
      where: {
        date: {
          equals: dateObj,
        },
      },
    });

    if (existingSchedules.length >= 5) {
      res.status(400).json({ message: "Max 5 classes allowed per day" });
      return;
    }

    // Verify trainer
    const trainer = await prisma.user.findUnique({ where: { id: trainerId } });

    if (!trainer || trainer.role !== "Trainer") {
      res.status(400).json({ message: "Invalid trainer" });
      return;
    }

    // Build time
    const [hour, minute] = startTime.split(":").map(Number);
    const startDateTime = new Date(dateObj);
    startDateTime.setHours(hour, minute, 0, 0);

    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 2);

    const schedule = await prisma.classSchedule.create({
      data: {
        date: dateObj,
        startTime: startDateTime,
        endTime: endDateTime,
        trainerId,
      },
    });

    await prisma.trainerAssignment.create({
      data: {
        trainerId,
        classScheduleId: schedule.id,
      },
    });

    res.status(201).json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getSchedules = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = (req as any).user;

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    let schedules;

    if (user.role === "Admin") {
      // Admin sees all schedules
      schedules = await prisma.classSchedule.findMany({
        include: {
          trainer: true,
          bookings: true,
        },
      });
    } else if (user.role === "Trainer") {
      // Trainer sees only their own assigned schedules
      schedules = await prisma.classSchedule.findMany({
        where: {
          trainerId: user.id,
        },
        include: {
          trainer: true,
          bookings: true,
        },
      });
    } else if (user.role === "Trainee") {
      // Trainee sees only schedules with available slots (< 10 bookings)
      schedules = await prisma.classSchedule.findMany({
        where: {
          bookings: {
            some: {}, // just to trigger the relation filter
          },
        },
        include: {
          trainer: true,
          bookings: true,
        },
      });

      // Filter to only schedules with < 10 bookings
      schedules = schedules.filter((schedule) => schedule.bookings.length < 10);
    }

    res.status(200).json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getScheduleById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const schedule = await prisma.classSchedule.findUnique({
      where: { id },
      include: {
        trainer: true,
        bookings: {
          include: {
            trainee: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!schedule) {
      res.status(404).json({ message: "Schedule not found" });
      return;
    }

    const isTrainerAssigned = schedule.trainerId === user.id;
    const isBookingAvailable = schedule.bookings.length < schedule.maxTrainees;

    if (user.role === "Trainer" && !isTrainerAssigned) {
      res.status(403).json({ message: "Access denied: Not your schedule" });
      return;
    }

    if (user.role === "Trainee" && !isBookingAvailable) {
      res.status(403).json({ message: "Access denied: Schedule is full" });
      return;
    }

    res.status(200).json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const updateSchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { date, startTime, trainerId } = req.body;

    const existingSchedule = await prisma.classSchedule.findUnique({
      where: { id },
    });

    if (!existingSchedule) {
      res.status(404).json({ message: "Schedule not found" });
      return;
    }

    const dateObj = date ? new Date(date) : existingSchedule.date;
    const [hour, minute] = startTime
      ? startTime.split(":").map(Number)
      : [0, 0];
    const startDateTime = new Date(dateObj);
    startDateTime.setHours(hour, minute, 0, 0);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 2);

    // Check max 5 classes per day
    const existingSchedules = await prisma.classSchedule.findMany({
      where: {
        date: dateObj,
        NOT: { id },
      },
    });

    if (existingSchedules.length >= 5) {
      res.status(400).json({ message: "Max 5 classes allowed per day" });
      return;
    }

    // If trainer is being changed
    if (trainerId) {
      const trainer = await prisma.user.findUnique({
        where: { id: trainerId },
      });

      if (!trainer || trainer.role !== "Trainer") {
        res.status(400).json({ message: "Invalid trainer ID" });
        return;
      }
    }

    const updatedSchedule = await prisma.classSchedule.update({
      where: { id },
      data: {
        date: dateObj,
        startTime: startDateTime,
        endTime: endDateTime,
        trainerId: trainerId || existingSchedule.trainerId,
      },
    });

    res.status(200).json(updatedSchedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const deleteSchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const schedule = await prisma.classSchedule.findUnique({ where: { id } });

    if (!schedule) {
      res.status(404).json({ message: "Schedule not found" });
      return;
    }

    // Delete related trainer assignments and bookings
    await prisma.booking.deleteMany({
      where: { classScheduleId: id },
    });

    await prisma.trainerAssignment.deleteMany({
      where: { classScheduleId: id },
    });

    // Delete schedule itself
    await prisma.classSchedule.delete({
      where: { id },
    });

    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};
