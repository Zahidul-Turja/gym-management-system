# 🏋️‍♂️ Gym Class Scheduling & Membership Management System APIs

## 📌 Project Overview

This system provides a platform to manage gym class schedules, trainer assignments, trainee bookings, and user roles (Admin, Trainer, Trainee). Admins can create and manage classes, assign trainers, and view bookings. Trainers and trainees can view their own relevant schedules and actions based on roles.

## 🧩 Relation Diagram

![Relational Diagram](./RelationDiagram.png)

## 🚀 Technology Stack

- **Language:** TypeScript
- **Backend:** Node.js, Express.js
- **ORM:** Prisma
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Runtime:** Node.js

# API Documentation

This document outlines the API endpoints for the Gym Class Scheduling and Membership Management System. The API is built with TypeScript, Node.js, Express, Prisma, and MongoDB. All endpoints are prefixed with `/api`.

## Base URL

[https://gym-management-system-api.vercel.app/api](https://gym-management-system-api.vercel.app/api)

## 1. Authentication APIs

### POST /auth/signup

**Description**: Register a new user (Trainee).

**Request Body**:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response Body**:

```json
{
  "success": true,
  "statusCode": 201,
  "message": "User created successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmEyYmIwNDY4YmZmNTNiY2ViMTE0MiIsInJvbGUiOiJUcmFpbmVlIiwiaWF0IjoxNzQ0NDQ4NDMzLCJleHAiOjE3NDUwNTMyMzN9.lu82HjiGXoSS9qXbS2h1GLo1N1mG-YTw83p-6f4f0FM",
    "user": {
      "id": "67fa2bb0468bff53bceb1142",
      "name": "User Name",
      "email": "email@email.com",
      "role": "Trainee"
    }
  }
}
```

### POST /auth/login

**Description**: Login user.

**Request Body**:

```json
{
  "email": "string",
  "password": "string"
}
```

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjkyZDAwYTU0YTE5NjQ2MDlmZjNiNCIsInJvbGUiOiJUcmFpbmVlIiwiaWF0IjoxNzQ0NDQ3MTczLCJleHAiOjE3NDUwNTE5NzN9.zvxnelwwmWoy6yngRT3lg1-4rV2d_d7rvoJtTrbNwBQ",
    "user": {
      "id": "67f92d00a54a1964609ff3b4",
      "name": "jane.smith@gmail.com",
      "email": "user1@gmail.com",
      "role": "Trainee"
    }
  }
}
```

### GET /api/users/me

**Description**: Get user details. (Protected Route)

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User fetched successfully",
  "data": {
    "user": {
      "id": "67fa2bb0468bff53bceb1142",
      "name": "User Name",
      "email": "email@email.com",
      "role": "Trainee",
      "createdAt": "2025-04-12T09:00:32.893Z"
    }
  }
}
```

## POST /api/users/trainers

**Description**: Create a new trainer. (Protected Route - Admin Only)

**Request Body**:

```json
{
  "name": "Trainer Six",
  "email": "trainer6@gmail.com",
  "password": "123456"
}
```

**Response Body**:

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Trainer created successfully",
  "data": {
    "user": {
      "id": "67fa2dd2468bff53bceb1143",
      "name": "Trainer Six",
      "email": "trainer6@gmail.com",
      "role": "Trainer"
    }
  }
}
```

### GET /api/users/trainers

**Description**: Get all trainers. (Protected Route - Admin Only)

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Trainers fetched successfully",
  "data": {
    "users": [
      {
        "id": "67f934f86c1bdea7385ebd99",
        "name": "Trainer One",
        "email": "trainer1@gmail.com",
        "createdAt": "2025-04-11T15:27:52.181Z",
        "updatedAt": "2025-04-11T15:27:52.181Z"
      },
      {
        "id": "67f94566be2011ac8aa48964",
        "name": "Trainer Three",
        "email": "trainer3@gmail.com",
        "createdAt": "2025-04-11T16:37:58.214Z",
        "updatedAt": "2025-04-11T16:37:58.214Z"
      },
      {
        "id": "67fa0b36cdd701204c8c3bc2",
        "name": "Trainer Four",
        "email": "trainer4@gmail.com",
        "createdAt": "2025-04-12T06:41:58.643Z",
        "updatedAt": "2025-04-12T06:41:58.643Z"
      },
      {
        "id": "67fa0b70363f586354be385a",
        "name": "Trainer Five",
        "email": "trainer5@gmail.com",
        "createdAt": "2025-04-12T06:42:56.526Z",
        "updatedAt": "2025-04-12T06:42:56.526Z"
      },
      {
        "id": "67fa2dd2468bff53bceb1143",
        "name": "Trainer Six",
        "email": "trainer6@gmail.com",
        "createdAt": "2025-04-12T09:09:38.335Z",
        "updatedAt": "2025-04-12T09:09:38.335Z"
      }
    ]
  }
}
```

### GET /api/users/trainees

**Description**: Get all trainees. (Protected Route - Admin Only)

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Trainees fetched successfully",
  "data": {
    "users": [
      {
        "id": "67f91b0fa82b1044f923f88c",
        "name": "Azizul Islam Tushar",
        "email": "azizultushar98@gmail.com",
        "createdAt": "2025-04-11T13:37:19.929Z",
        "updatedAt": "2025-04-11T13:37:19.929Z"
      },
      {
        "id": "67f92d00a54a1964609ff3b4",
        "name": "jane.smith@gmail.com",
        "email": "user1@gmail.com",
        "createdAt": "2025-04-11T14:53:52.977Z",
        "updatedAt": "2025-04-12T06:50:31.475Z"
      }
    ]
  }
}
```

### PUT /api/users/profile

**Description**: Update user profile. (Protected Route - Admin, Trainer, Trainee)

**Request Body**:

```json
{
  "name": "jane.smith@gmail.com"
}
```

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": "67f92d00a54a1964609ff3b4",
      "name": "jane.smith@gmail.com",
      "email": "user1@gmail.com",
      "role": "Trainee",
      "createdAt": "2025-04-11T14:53:52.977Z",
      "updatedAt": "2025-04-12T09:13:49.780Z"
    }
  }
}
```

## POST /api/schedules

**Description**: Create a new schedule. (Protected Route - Admin Only)

**Request Body**:

```json
{
  "date": "2025-04-12",
  "startTime": "12:00",
  "trainerId": "67f934f86c1bdea7385ebd99"
}
```

**Response Body**:

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Schedule created successfully",
  "data": {
    "id": "67fa2f39468bff53bceb1144",
    "date": "2025-04-13T00:00:00.000Z",
    "startTime": "2025-04-13T12:00:00.000Z",
    "endTime": "2025-04-13T14:00:00.000Z",
    "maxTrainees": 10,
    "trainerId": "67f934f86c1bdea7385ebd99",
    "createdAt": "2025-04-12T09:15:37.982Z",
    "updatedAt": "2025-04-12T09:15:37.982Z"
  }
}
```

### GET /api/schedules

**Description**: Get all schedules. (Protected Route - Admin(ALL), Trainer(If assigned), Trainee(All available) )

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Schedules fetched successfully",
  "data": [
    {
      "id": "67fa2f39468bff53bceb1144",
      "date": "2025-04-13T00:00:00.000Z",
      "startTime": "2025-04-13T12:00:00.000Z",
      "endTime": "2025-04-13T14:00:00.000Z",
      "maxTrainees": 10,
      "trainerId": "67f934f86c1bdea7385ebd99",
      "createdAt": "2025-04-12T09:15:37.982Z",
      "updatedAt": "2025-04-12T09:15:37.982Z",
      "trainer": {
        "id": "67f934f86c1bdea7385ebd99",
        "name": "Trainer One",
        "email": "trainer1@gmail.com",
        "password": "$2b$12$UfERZ2a.JJZosRyL4rNeVe/ul5yv2aT1pvb6IU5lvt3YzKsgntA6q",
        "role": "Trainer",
        "createdAt": "2025-04-11T15:27:52.181Z",
        "updatedAt": "2025-04-11T15:27:52.181Z"
      },
      "bookings": []
    }
  ]
}
```

### GET /api/schedules/:scheduleId

**Description**: Get a specific schedule by ID. (Protected Route)

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Schedule fetched successfully",
  "data": {
    "id": "67fa2f39468bff53bceb1144",
    "date": "2025-04-13T00:00:00.000Z",
    "startTime": "2025-04-13T12:00:00.000Z",
    "endTime": "2025-04-13T14:00:00.000Z",
    "maxTrainees": 10,
    "trainerId": "67f934f86c1bdea7385ebd99",
    "createdAt": "2025-04-12T09:15:37.982Z",
    "updatedAt": "2025-04-12T09:15:37.982Z",
    "trainer": {
      "id": "67f934f86c1bdea7385ebd99",
      "name": "Trainer One",
      "email": "trainer1@gmail.com",
      "password": "$2b$12$UfERZ2a.JJZosRyL4rNeVe/ul5yv2aT1pvb6IU5lvt3YzKsgntA6q",
      "role": "Trainer",
      "createdAt": "2025-04-11T15:27:52.181Z",
      "updatedAt": "2025-04-11T15:27:52.181Z"
    },
    "bookings": []
  }
}
```

### PUT /api/schedules/:scheduleId

**Description**: Update a schedule by ID. (Protected Route - Admin only)

**Request Body**:

```json
{
  "date": "2025-04-18",
  "startTime": "12:00",
  "trainerId": "67f934f86c1bdea7385ebd99"
}
```

**Response Body**:

```json
{
  "success": true,
  "statusCode": 200,
  "Message": "Schedule updated successfully",
  "data": {
    "id": "67fa2f39468bff53bceb1144",
    "date": "2025-04-18T00:00:00.000Z",
    "startTime": "2025-04-18T12:00:00.000Z",
    "endTime": "2025-04-18T14:00:00.000Z",
    "maxTrainees": 10,
    "trainerId": "67f934f86c1bdea7385ebd99",
    "createdAt": "2025-04-12T09:15:37.982Z",
    "updatedAt": "2025-04-12T09:21:10.646Z"
  }
}
```

### DELETE /api/schedules/:scheduleId

**Description**: Delete a schedule by ID. (Protected Route - Admin only)

### POST /api/bookings/:scheduleId

**Description**: Book a class. (Protected Route - Trainee only)

**Response Body**:

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Successfully booked the class",
  "data": {
    "classSchedule": {
      "id": "67fa2f39468bff53bceb1144",
      "date": "2025-04-18T00:00:00.000Z",
      "startTime": "2025-04-18T12:00:00.000Z",
      "endTime": "2025-04-18T14:00:00.000Z",
      "maxTrainees": 10,
      "trainerId": "67f934f86c1bdea7385ebd99",
      "createdAt": "2025-04-12T09:15:37.982Z",
      "updatedAt": "2025-04-12T09:21:10.646Z",
      "bookings": []
    }
  }
}
```

### GET /api/bookings/my-bookings

**Description**: Get all my bookings. (Protected Route - Trainee only)

**Response Body**:

```json
[
  {
    "id": "67fa3110468bff53bceb1146",
    "traineeId": "67f92d00a54a1964609ff3b4",
    "classScheduleId": "67fa2f39468bff53bceb1144",
    "createdAt": "2025-04-12T09:23:28.307Z",
    "updatedAt": "2025-04-12T09:23:28.307Z",
    "classSchedule": {
      "id": "67fa2f39468bff53bceb1144",
      "date": "2025-04-18T00:00:00.000Z",
      "startTime": "2025-04-18T12:00:00.000Z",
      "endTime": "2025-04-18T14:00:00.000Z",
      "maxTrainees": 10,
      "trainerId": "67f934f86c1bdea7385ebd99",
      "createdAt": "2025-04-12T09:15:37.982Z",
      "updatedAt": "2025-04-12T09:21:10.646Z",
      "trainer": {
        "id": "67f934f86c1bdea7385ebd99",
        "name": "Trainer One",
        "email": "trainer1@gmail.com"
      }
    }
  }
]
```

### DELETE /api/bookings/my-bookings/:bookingId

**Description**: Cancel a booking. (Protected Route - Trainee only)

# 🗂️ Database Schema

**Description**: This project uses MongoDB with Prisma ORM for data modeling. Below are the Prisma model definitions used in this application:

---

### 📌 User Model

Represents users of the system. A user can be an `Admin`, `Trainer`, or `Trainee`.

```prisma
model User {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  name        String
  email       String   @unique
  password    String
  role        Role
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  conductingClasses     ClassSchedule[]      @relation("TrainerClasses")
  bookings              Booking[]            @relation("TraineeBookings")
  trainerAssignments    TrainerAssignment[]  @relation("TrainerAssignments")
}
```

### 🧾 Role Enum

Defines user roles within the system.

```prisma
enum Role {
  Admin
  Trainer
  Trainee
}
```

### 📅 ClassSchedule Model

Represents a scheduled fitness class.

```prisma
model ClassSchedule {
  id                 String   @id @default(auto()) @map("_id") @db.ObjectId
  date               DateTime
  startTime          DateTime
  endTime            DateTime
  maxTrainees        Int      @default(10)
  trainerId          String   @db.ObjectId
  trainer            User     @relation("TrainerClasses", fields: [trainerId], references: [id])
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
  bookings           Booking[]
  trainerAssignments TrainerAssignment[]
}
```

### 🎟️ Booking Model

Represents a trainee booking a specific class.

```prisma
model Booking {
  id               String   @id @default(auto()) @map("_id") @db.ObjectId
  traineeId        String   @db.ObjectId
  classScheduleId  String   @db.ObjectId
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  trainee          User          @relation("TraineeBookings", fields: [traineeId], references: [id])
  classSchedule    ClassSchedule @relation("ScheduleBookings", fields: [classScheduleId], references: [id])
  @@unique([traineeId, classScheduleId])
}
```

### 📋 TrainerAssignment Model

Represents assigning a trainer to a class schedule.

```prisma
model TrainerAssignment {
  id               String   @id @default(auto()) @map("_id") @db.ObjectId
  trainerId        String   @db.ObjectId
  classScheduleId  String   @db.ObjectId
  assignedAt       DateTime @default(now())
  updatedAt        DateTime @updatedAt
  trainer          User          @relation("TrainerAssignments", fields: [trainerId], references: [id])
  classSchedule    ClassSchedule @relation(fields: [classScheduleId], references: [id])
}
```

## Admin Credentials

```json
{
  "email": "admin@gmail.com",
  "password": "5chedu11ng"
}
```

## Setup Instructions

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/AIsTushar/gym-management-system
```

```bash
cd gym-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
DATABASE_URL="your_mongodb_connection_url"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5.Push Schema to Database (if needed)

```bash
npx prisma db push
```

### 6. Start the Server

```bash
npm run dev
```

## Live Hosting Link:

[https://gym-management-system-api.vercel.app/](https://gym-management-system-api.vercel.app/)

# Testing Instructions:

## Download and Import Postman Collection

### 1. Download the Postman Collection

[Download Postman Collection](./postman_collection.json)

### 2. Import the Collection into Postman

### 3. Run the Tests

- Create a new Environment
- Create new variables: live, token and set the value of live to

```
https://gym-management-system-api.vercel.app

```

> NOTE: token should be set automatically after login and signup through the script.

import postman_collection.json into Postman and run the tests.

## Admin Credentials

```json
{
  "email": "admin@gmail.com",
  "password": "5chedu11ng"
}
```

## Project Structure:

```bash
Directory structure:
└── aistushar-gym-management-system/
    ├── README.md
    ├── package.json
    ├── postman_collection.json
    ├── tsconfig.json
    ├── vercel.json
    ├── prisma/
    │   └── schema.prisma
    └── src/
        ├── app.ts
        ├── server.ts
        ├── config/
        │   ├── db.ts
        │   └── prisma.ts
        ├── generated/
        │   └── prisma/
        │       ├── client.d.ts
        │       ├── client.js
        │       ├── default.d.ts
        │       ├── default.js
        │       ├── edge.d.ts
        │       ├── edge.js
        │       ├── index-browser.js
        │       ├── index.d.ts
        │       ├── index.js
        │       ├── package.json
        │       ├── query_engine-windows.dll.node
        │       ├── query_engine-windows.dll.node.tmp18292
        │       ├── query_engine-windows.dll.node.tmp5408
        │       ├── schema.prisma
        │       ├── wasm.d.ts
        │       ├── wasm.js
        │       └── runtime/
        │           ├── edge-esm.js
        │           ├── edge.js
        │           ├── index-browser.d.ts
        │           ├── index-browser.js
        │           ├── library.d.ts
        │           ├── library.js
        │           ├── react-native.js
        │           └── wasm.js
        ├── middleware/
        │   ├── protect.ts
        │   └── restrictTo.ts
        ├── modules/
        │   ├── auth/
        │   │   ├── auth.controller.ts
        │   │   ├── auth.routes.ts
        │   │   └── auth.service.ts
        │   ├── booking/
        │   │   ├── booking.controller.ts
        │   │   └── booking.routes.ts
        │   ├── schedule/
        │   │   ├── schedule.controller.ts
        │   │   └── schedule.routes.ts
        │   └── user/
        │       ├── user.controller.ts
        │       ├── user.routes.ts
        │       └── user.service.ts
        └── utils/
            └── jwt.ts
```
