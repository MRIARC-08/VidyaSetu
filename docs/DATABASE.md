# Database

VidyaSetu uses PostgreSQL with Prisma ORM.

## Prisma Files

```txt
src/prisma/schema.prisma
src/prisma/seed.ts
src/prisma/seed-content.ts
```

## Core Models

### User

Stores student and admin accounts.

### Account

Stores OAuth provider account information.

### RefreshToken

Stores refresh tokens for session renewal.

### AcademicClass

Represents an NCERT class.

### Subject

Represents a subject belonging to a class.

### Chapter

Represents a chapter belonging to a subject.

### Topic

Represents a topic belonging to a chapter.

### Question

Stores MCQ and subjective questions.

### Option

Stores options for MCQ questions.

### Quiz

Stores quiz metadata.

### QuizSession

Stores quiz attempts.

### QuestionResponse

Stores responses submitted by users.

### SubjectiveEvaluation

Stores evaluation data for subjective answers.

### Note

Stores uploaded notes and extracted text.

### UserStats

Stores aggregated analytics and performance data.

### AIGenerationLog

Stores AI generation metadata and usage statistics.

## Relationships

```txt
User
├── Account
├── RefreshToken
├── Note
├── Quiz
├── QuizSession
├── UserStats
└── AIGenerationLog
```

```txt
AcademicClass
└── Subject
    └── Chapter
        └── Topic
            └── Question
                └── Option
```

```txt
Quiz
└── QuizSession
    └── QuestionResponse
        └── SubjectiveEvaluation
```

## Database Commands

Generate Prisma Client:

```bash
pnpm db:generate
```

Run Migrations:

```bash
pnpm db:migrate
```

Seed Database:

```bash
pnpm db:seed
```

Seed Chapter Content:

```bash
pnpm db:seed:content
```

Open Prisma Studio:

```bash
pnpm db:studio
```
