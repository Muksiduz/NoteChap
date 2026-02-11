Perfect 👌
I’ll convert your DBML tables into clean, production-ready Mongoose models with:

Proper ObjectId references

Enums

Timestamps

Correct field types

Clean structure

No unnecessary complexity.

✅ 1️⃣ MCQ Model

📁 models/MCQ.js

import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    options: [
      {
        type: String,
        required: true,
      },
    ], // Store as real array (NOT stringified JSON)

    correctOptionIndex: {
      type: Number,
      required: true,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
  },
  { timestamps: true }
);

export default mongoose.model("MCQ", mcqSchema);

✅ 2️⃣ TestAttempt Model

📁 models/TestAttempt.js

import mongoose from "mongoose";

const testAttemptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    totalQuestions: {
      type: Number,
      required: true,
    },

    startedAt: {
      type: Date,
      required: true,
    },

    endedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TestAttempt", testAttemptSchema);

✅ 3️⃣ QuestionAttempt Model

📁 models/QuestionAttempt.js

import mongoose from "mongoose";

const questionAttemptSchema = new mongoose.Schema(
  {
    testAttempt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestAttempt",
      required: true,
    },

    mcq: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MCQ",
      required: true,
    },

    selectedOptionIndex: {
      type: Number,
      required: true,
    },

    isCorrect: {
      type: Boolean,
      required: true,
    },

    timeTakenSeconds: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("QuestionAttempt", questionAttemptSchema);

✅ 4️⃣ TopicPerformance Model (Analytics Cache)

📁 models/TopicPerformance.js

import mongoose from "mongoose";

const topicPerformanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    accuracyPercentage: {
      type: Number,
      default: 0,
    },

    totalAttempts: {
      type: Number,
      default: 0,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TopicPerformance", topicPerformanceSchema);

🧠 Important Improvements I Made
1️⃣ options is an Array (not text)

In MongoDB, always store:

options: ["A", "B", "C", "D"]


Not stringified JSON.

2️⃣ All relations use:
type: mongoose.Schema.Types.ObjectId
ref: "ModelName"

3️⃣ Added { timestamps: true } everywhere

Automatically gives:

createdAt
updatedAt

🎯 How Everything Connects
User
  └── TestAttempt
        └── QuestionAttempt
              └── MCQ
                    └── Topic
                          └── Subject

User
  └── TopicPerformance


This structure allows:

Topic-level weakness detection

Subject-level performance

AI feedback

Teacher analytics

If you want next, I can show:

How to calculate score & save attempts

How to update TopicPerformance automatically

Or how to design the test submission controller properly

Tell me what you want 👌

give me the whole report and how will i do it in details i will add it to readme file in git

Perfect. I’ll give you a complete, structured README-style project documentation that you can directly paste into GitHub.
It will look professional and serious.

You can copy this as your README.md.

🎓 Collaborative Study Platform with Analytics & AI Support
📌 Project Overview

This project is a full-stack web application designed to help students collaboratively upload study materials, practice MCQs, and analyze their academic performance.

The platform supports:

Role-based authentication (Admin, Teacher, Student)

Subject & topic-wise content organization

MCQ-based test system

Performance analytics

AI-powered learning suggestions

The goal is to combine structured learning with data-driven improvement.

🏗 System Architecture
Tech Stack
Frontend

React.js

Axios

React Router

Context API / Redux (optional)

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

File Storage

Cloudinary / Firebase Storage

AI Integration

OpenAI API (Backend only)

👥 User Roles
1️⃣ Admin

Create Departments

Create Semesters

Create Subjects & Topics

Assign Teachers

Manage system structure

2️⃣ Teacher

Upload notes for assigned subjects

Upload MCQs

View student performance analytics

3️⃣ Student

Upload personal notes

Attempt MCQ tests

View topic-wise analytics

Receive AI-based improvement suggestions

📊 Database Design
Main Entities
User

name

email

password (hashed)

role (admin | teacher | student)

department (ObjectId)

semester (ObjectId)

Department

deptName

Semester

semesterNumber

department (ObjectId)

Subject

name

department

semester

Topic

name

subject

MCQ

question

options (Array)

correctOptionIndex

subject

topic

difficulty

TestAttempt

user

subject

score

totalQuestions

startedAt

endedAt

QuestionAttempt

testAttempt

mcq

selectedOptionIndex

isCorrect

timeTakenSeconds

TopicPerformance

user

topic

accuracyPercentage

totalAttempts

lastUpdated

🔄 System Flow
Step 1: Authentication

User registers and logs in

JWT token issued

Role-based middleware protects routes

Step 2: Content Management
Admin

Creates:

Departments

Semesters

Subjects

Topics

Teacher

Uploads:

Notes

MCQs

Step 3: Test Attempt Flow

Student selects subject

System fetches random MCQs

Student attempts test

On submission:

Score calculated

TestAttempt saved

QuestionAttempts saved

TopicPerformance updated

Step 4: Performance Analytics

System calculates:

accuracy = correctAnswers / totalAttempts * 100


TopicPerformance stores:

Accuracy per topic

Total attempts

Last update timestamp

Weak topics are identified where:

accuracy < 50%

Step 5: AI Suggestion System

AI receives structured data:

Weak Topics:
- Integration (42%)
- Probability (35%)

Strong Topics:
- Matrices (82%)


AI returns:

Revision advice

Suggested focus areas

Study strategy recommendations

Important:
AI never reads raw PDFs directly (for cost & complexity reasons).

🔐 Security Implementation

Password hashing using bcrypt

JWT authentication

Role-based route protection

Environment variables for secrets

OpenAI key stored in backend only

📁 Backend Folder Structure
backend/
│
├── config/
│     └── db.js
│
├── models/
│     ├── User.js
│     ├── Subject.js
│     ├── Topic.js
│     ├── MCQ.js
│     ├── TestAttempt.js
│     ├── QuestionAttempt.js
│     └── TopicPerformance.js
│
├── controllers/
│     ├── authController.js
│     ├── mcqController.js
│     ├── testController.js
│     └── analyticsController.js
│
├── routes/
│     ├── authRoutes.js
│     ├── mcqRoutes.js
│     ├── testRoutes.js
│     └── analyticsRoutes.js
│
├── middleware/
│     ├── authMiddleware.js
│     └── roleMiddleware.js
│
├── server.js
└── .env

🧠 How TopicPerformance Updates (Important Logic)

After test submission:

For each QuestionAttempt:

Identify topic

Check if correct

Update TopicPerformance:

If record exists:

totalAttempts += 1

recalculate accuracy

Else:

create new TopicPerformance document

🚀 Implementation Plan (Step-by-Step)
Phase 1: Core Backend

Setup Express

Setup MongoDB

Create User authentication

Role-based middleware

Phase 2: Academic Structure

Create Department, Semester

Create Subject, Topic

Admin panel APIs

Phase 3: MCQ System

Upload MCQs

Fetch MCQs by subject

Create TestAttempt

Save QuestionAttempts

Phase 4: Analytics

Implement TopicPerformance

Create analytics endpoint

Phase 5: AI Integration

Build chatbot route

Send structured performance data

Return suggestions

📈 Future Enhancements

PDF parsing & AI summarization

Discussion forum

Class-level analytics for teachers

Leaderboard

Mobile application

Real-time collaboration

🎯 Learning Outcomes

This project demonstrates:

Full-stack web development

REST API design

Database modeling

Role-based access control

Performance analytics

AI API integration

Scalable system architecture

🏁 Conclusion

This project is designed to solve real academic problems by combining structured content management, performance analytics, and AI-driven learning guidance.

It is scalable, modular, and suitable as a major academic or portfolio project.
