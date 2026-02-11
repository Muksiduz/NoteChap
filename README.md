# 🎓 Collaborative Study Platform with Analytics & AI Support

## 📌 Overview

The Collaborative Study Platform is a full-stack web application designed to help students organize study materials, attempt subject-wise MCQ tests, analyze performance, and receive AI-based learning suggestions.

This platform supports structured academic management with role-based access control and topic-level performance tracking.

---

## 🚀 Features

### 👥 Role-Based System
- **Admin**
  - Manage Departments
  - Manage Semesters
  - Create Subjects & Topics
  - Assign Teachers

- **Teacher**
  - Upload Notes
  - Upload MCQs
  - Monitor Student Performance

- **Student**
  - Upload Personal Notes
  - Attempt MCQ Tests
  - View Performance Analytics
  - Receive AI-Based Suggestions

---

## 🏗 Tech Stack

### Frontend
- React.js
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (password hashing)

### File Storage
- Cloudinary / Firebase Storage

### AI Integration
- OpenAI API (Backend Only)

---

## 🗄 Database Structure

### User
- name
- email
- password (hashed)
- role (admin | teacher | student)
- department (ObjectId)
- semester (ObjectId)

### Department
- deptName

### Semester
- semesterNumber
- department (ObjectId)

### Subject
- name
- department (ObjectId)
- semester (ObjectId)

### Topic
- name
- subject (ObjectId)

### MCQ
- question
- options (Array of Strings)
- correctOptionIndex
- subject (ObjectId)
- topic (ObjectId)
- difficulty (easy | medium | hard)

### TestAttempt
- user (ObjectId)
- subject (ObjectId)
- score
- totalQuestions
- startedAt
- endedAt

### QuestionAttempt
- testAttempt (ObjectId)
- mcq (ObjectId)
- selectedOptionIndex
- isCorrect
- timeTakenSeconds

### TopicPerformance
- user (ObjectId)
- topic (ObjectId)
- accuracyPercentage
- totalAttempts
- lastUpdated

---

## 🔄 System Flow

### 1️⃣ Authentication
- User registers & logs in
- JWT token generated
- Role-based middleware protects routes

### 2️⃣ Content Management
- Admin sets up academic structure
- Teachers upload MCQs & Notes
- Students access materials

### 3️⃣ Test Attempt Flow
1. Student selects subject
2. MCQs fetched
3. Student submits answers
4. System:
   - Calculates score
   - Saves TestAttempt
   - Saves QuestionAttempt records
   - Updates TopicPerformance

### 4️⃣ Performance Analysis
Topic-level accuracy is calculated:

accuracy = (correctAnswers / totalAttempts) × 100

Weak topics identified when:
accuracy < 50%

### 5️⃣ AI Suggestion Flow
AI receives structured data:
- Weak topics
- Strong topics
- Recent performance

AI returns:
- Revision recommendations
- Focus suggestions
- Study strategies

---

## 🔐 Security

- Password hashing using bcrypt
- JWT authentication
- Role-based authorization
- Environment variable management
- OpenAI key secured in backend

---

## 📁 Backend Folder Structure

****
