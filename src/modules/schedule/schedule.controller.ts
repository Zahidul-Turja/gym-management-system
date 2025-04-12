import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { error } from "console";

export const createSchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, startTime, trainerId } = req.body;

    if (!date || !startTime || !trainerId) {
      let message;
      let field;
      if (!date) {
        field = "date";
        message = "Date is required";
      } else if (!startTime) {
        field = "startTime";
        message = "Start time is required";
      } else {
        field = "trainerId";
        message = "Trainer ID is required";
      }

      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "All fields are required",
        errorDetails: {
          field,
          message,
        },
      });
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
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "Max 5 classes allowed per day",
        errorDetails: {
          field: "date",
          message: "You cannot create more than 5 classes on the same day",
        },
      });
      return;
    }

    // Verify trainer
    const trainer = await prisma.user.findUnique({ where: { id: trainerId } });

    if (!trainer || trainer.role !== "Trainer") {
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "Invalid trainer",
        errorDetails: {
          field: "trainerId",
          message: "Trainer not found or not a trainer",
        },
      });
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

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Schedule created successfully",
      data: schedule,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
  }
};

export const getSchedules = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = (req as any).user;

    if (!user) {
      res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Unauthorized",
        errorDetails: "User not found",
      });
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

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Schedules fetched successfully",
      data: schedules,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
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
      res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Unauthorized",
        errorDetails: "User not found",
      });
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
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Schedule not found",
      });
      return;
    }

    const isTrainerAssigned = schedule.trainerId === user.id;
    const isBookingAvailable = schedule.bookings.length < schedule.maxTrainees;

    if (user.role === "Trainer" && !isTrainerAssigned) {
      res.status(403).json({
        success: false,
        statusCode: 403,
        message: "Access denied: Not your schedule",
        errorDetails: {
          field: "trainerId",
          message: "You are not the trainer of this schedule",
        },
      });
      return;
    }

    if (user.role === "Trainee" && !isBookingAvailable) {
      res.status(403).json({
        success: false,
        statusCode: 403,
        message: "Access denied: Schedule is full",
        errorDetails: {
          field: "bookings",
          message: "This schedule is full",
        },
      });
      return;
    }

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Schedule fetched successfully",
      data: schedule,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
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
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Schedule not found",
        errorDetails: {
          field: "id",
          message: "Schedule not found with the provided ID",
        },
      });
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
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: "Max 5 classes allowed per day",
        errorDetails: {
          field: "date",
          message: "You cannot create more than 5 classes on the same day",
        },
      });
      return;
    }

    // If trainer is being changed
    if (trainerId) {
      const trainer = await prisma.user.findUnique({
        where: { id: trainerId },
      });

      if (!trainer || trainer.role !== "Trainer") {
        res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Invalid trainer",
          errorDetails: {
            field: "trainerId",
            message: "Trainer not found or not a trainer",
          },
        });
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

    res.status(200).json({
      success: true,
      statusCode: 200,
      Message: "Schedule updated successfully",
      data: updatedSchedule,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server error",
      errorDetails: err,
    });
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
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Schedule not found",
        errorDetails: {
          field: "id",
          message: "Schedule not found with the provided ID",
        },
      });
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

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Schedule deleted successfully",
      errrorDetails: {
        field: "id",
        message: "Schedule deleted successfully",
      },
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        success: false,
        statusCode: 500,
        message: "Server error",
        errorDetails: err,
      });
  }
};
