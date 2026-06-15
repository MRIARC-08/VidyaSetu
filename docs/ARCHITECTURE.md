# Architecture

VidyaSetu is a Next.js based adaptive learning platform for NCERT-focused study, quiz practice, notes, analytics, and AI-assisted learning workflows.

## Tech Stack

* Next.js App Router
* React
* TypeScript
* Tailwind CSS
* Prisma ORM
* PostgreSQL
* NextAuth
* JWT Authentication
* Cloudinary
* Vitest
* FastAPI
* Sentence Transformers
* LangChain with Groq

## High-Level Structure

```txt
src/
├── app/
├── components/
├── constants/
├── hooks/
├── lib/
├── modules/
├── prisma/
└── types/

services/
└── ai/
```

## Application Flow

```txt
Frontend
   ↓
API Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Prisma
   ↓
PostgreSQL
```

AI requests use a separate internal service:

```txt
Browser
   ↓
Next.js API and authentication
   ├── Prisma → PostgreSQL
   └── authenticated internal request
           ↓
       FastAPI AI service
           ├── Sentence Transformers
           ├── retrieval through pgvector
           └── LangChain → Groq
```

The browser never calls the AI service or an LLM provider directly. The
complete design is documented in
[AI_BACKEND_ARCHITECTURE.md](AI_BACKEND_ARCHITECTURE.md).

## API Architecture

```txt
src/app/api/
├── admin/
├── ai/
├── analytics/
├── auth/
├── ncert/
├── notes/
├── quiz/
├── user/
└── webhooks/
```

## Module Architecture

```txt
src/modules/
├── admin/
├── ai/
├── analytics/
├── auth/
├── ncert/
├── notes/
├── quiz/
└── user/
```

Each module follows:

```txt
Controller → Service → Repository
```

## Authentication Flow

```txt
User Login
    ↓
Auth API
    ↓
Auth Service
    ↓
JWT + Refresh Token
    ↓
Cookies
```

## Database Layer

The application uses PostgreSQL with Prisma ORM.

Important files:

```txt
src/prisma/schema.prisma
src/prisma/seed.ts
src/prisma/seed-content.ts
```

## Deployment Overview

The application is designed for deployment on Vercel with a PostgreSQL database provider such as Neon, Supabase, Railway, or a self-hosted PostgreSQL instance.

The Python AI service must run on a container or long-lived process that can
cache embedding models. It is not intended to run inside a Vercel function.
