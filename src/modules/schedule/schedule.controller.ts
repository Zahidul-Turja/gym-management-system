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
