# VidyaSetu

AI-Powered Adaptive Study & Assessment Platform

---

## 🚀 Overview

VidyaSetu transforms passive studying into structured, measurable, AI-guided learning.

It is not a quiz generator.  
It is a structured AI study system.

VidyaSetu combines:

- AI Study Companion
- Adaptive Quiz Engine
- Subjective Answer Evaluation
- Performance Analytics Dashboard

This project is built with a modular architecture and production-ready design.

---

## 🎯 Problem Statement

Students:

- Study passively
- Cannot measure weak areas
- Don’t get structured evaluation
- Lack revision tracking
- Have no unified AI + Practice + Analytics system

VidyaSetu solves this by providing an integrated AI-driven learning ecosystem.

---

## 👥 Target Users

Primary Focus:

- Class 9–12 students
- Board exam students
- JEE / NEET aspirants

---

## 🧠 Core Features

### 1️⃣ Structured Study Mode (NCERT-Based)

Users select:

Class → Subject → Chapter

System generates:

- MCQs
- Subjective questions
- Important theory highlights
- AI explanations
- Revision summaries
- Board-style expected questions

---

### 2️⃣ Custom Notes Mode

Users can submit:

- Text notes
- PDF notes (planned)
- Image notes (future)

System generates:

- MCQs
- Subjective questions
- Case-based questions
- Flashcards
- Summaries

---

### 3️⃣ Practice Modes

- 🟢 Practice Mode (with hints)
- 🔴 Exam Mode (timer, no hints)
- 🔁 Adaptive Mode (dynamic difficulty adjustment)

---

### 4️⃣ Subjective Answer Evaluation

AI evaluates written answers and provides:

- Score (e.g., out of 5 / 10)
- Strengths
- Missing keywords
- Structural improvements
- Ideal reference answer

---

### 5️⃣ Analytics Dashboard

Tracks:

- Accuracy over time
- Subject-wise performance
- Difficulty-level performance
- Study streaks
- Attempt history
- Weak topic detection

---

## 🏗 Architecture

VidyaSetu follows a modular, scalable backend structure.

Core Modules:

- Auth
- NCERT
- Notes
- Quiz
- AI
- Analytics
- Admin

The system separates:

- Quiz definition
- Quiz sessions
- Question attempts
- AI generation logs
- User performance statistics

This ensures scalability and clean data modeling.

---

## 🛠 Tech Stack

### Frontend

- Next.js
- TailwindCSS
- Chart.js

### Backend

- Node.js
- Express
- MongoDB Atlas
- JWT Authentication
- Prisma (if SQL used)

### AI Layer

- Swappable provider architecture
- Groq / Together / OpenAI compatible

### Hosting

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas
- File Storage → Cloudinary

---

## 🔐 Security & Production Standards

- JWT-based authentication
- Role-based access control
- Environment variable isolation
- AI provider abstraction layer
- Error handling middleware
- Modular service architecture

---

## 📊 Database Design (Core Entities)

- User
- Class
- Subject
- Chapter
- Note
- Quiz
- Question
- QuizSession
- Attempt
- SubjectiveAnswer
- AIGenerationLog
- UserStats

Analytics are computed efficiently to ensure performance.

---

## 🚀 Roadmap

### Phase 1 (Core Foundation)

- Authentication system
- Structured quiz generation
- Quiz session tracking
- Basic analytics dashboard

### Phase 2

- Subjective answer evaluation
- Adaptive difficulty engine
- AI performance suggestions

### Phase 3

- Leaderboards
- Teacher dashboard
- Study groups
- Advanced revision engine

---

## 📈 Why This Project Matters

VidyaSetu demonstrates:

- AI integration in real-world systems
- Modular backend architecture
- Analytics-driven product design
- Adaptive algorithm implementation
- Full-stack production deployment
- Scalable system thinking

This is not a CRUD demo.
It is a structured AI learning system.

---

## 🧑‍💻 Author

Adarsh  
Founder & Builder of VidyaSetu

---

## 📜 License

MIT License
