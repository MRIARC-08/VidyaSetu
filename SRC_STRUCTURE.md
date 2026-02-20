# Vidyasetu - src Folder Structure

The project `src/` structure used by the app:

```
src/
│
├── app/                                  # Next.js App Router (UI + API Entry)
│   │
│   ├── (public)/                         # Public pages
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │
│   ├── (auth)/                           # Auth pages
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── layout.tsx
│   │
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── analytics/page.tsx
│   │   ├── streak/page.tsx
│   │
│   ├── ncert/
│   │   ├── [class]/page.tsx
│   │   ├── [class]/[subject]/page.tsx
│   │   ├── [class]/[subject]/[chapter]/page.tsx
│   │
│   ├── quiz/
│   │   ├── create/page.tsx
│   │   ├── [quizId]/page.tsx
│   │   ├── [quizId]/result/page.tsx
│   │
│   ├── notes/
│   │   ├── page.tsx
│   │   ├── upload/page.tsx
│   │   ├── [noteId]/page.tsx
│   │
│   ├── admin/
│   │   ├── page.tsx
│   │   ├── ncert/page.tsx
│   │   ├── analytics/page.tsx
│   │
│   ├── api/                              # Thin API Layer (NO logic)
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── google/route.ts
│   │   │   ├── refresh/route.ts
│   │   │   └── logout/route.ts
│   │   │
│   │   ├── ncert/
│   │   │   ├── classes/route.ts
│   │   │   ├── subjects/route.ts
│   │   │   ├── chapters/route.ts
│   │   │   └── topics/route.ts
│   │   │
│   │   ├── quiz/
│   │   │   ├── create/route.ts
│   │   │   ├── start/route.ts
│   │   │   ├── submit/route.ts
│   │   │   └── session/route.ts
│   │   │
│   │   ├── notes/
│   │   │   ├── upload/route.ts
│   │   │   └── extract/route.ts
│   │   │
│   │   ├── ai/
│   │   │   ├── generate-questions/route.ts
│   │   │   └── evaluate-subjective/route.ts
│   │   │
│   │   ├── analytics/
│   │   │   ├── overview/route.ts
│   │   │   └── weak-topics/route.ts
│   │   │
│   │   ├── admin/
│   │   │   ├── seed-ncert/route.ts
│   │   │   └── add-question/route.ts
│   │   │
│   │   └── webhooks/
│   │
│   ├── layout.tsx
│   └── globals.css
│
│
├── modules/                              # REAL Backend (Domain-Based)
│   │
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.repository.ts
│   │   ├── auth.types.ts
│   │   └── auth.validator.ts
│   │
│   ├── quiz/
│   │   ├── quiz.controller.ts
│   │   ├── quiz.service.ts
│   │   ├── quiz.repository.ts
│   │   ├── quiz.types.ts
│   │   └── quiz.validator.ts
│   │
│   ├── ncert/
│   │   ├── ncert.controller.ts
│   │   ├── ncert.service.ts
│   │   ├── ncert.repository.ts
│   │   └── ncert.types.ts
│   │
│   ├── notes/
│   │   ├── notes.controller.ts
│   │   ├── notes.service.ts
│   │   ├── notes.repository.ts
│   │   └── notes.types.ts
│   │
│   ├── analytics/
│   │   ├── analytics.controller.ts
│   │   ├── analytics.service.ts
│   │   ├── analytics.repository.ts
│   │   └── analytics.types.ts
│   │
│   ├── ai/
│   │   ├── ai.controller.ts
│   │   ├── ai.service.ts
│   │   ├── ai.provider.ts            # OpenAI / LLM logic
│   │   └── ai.types.ts
│   │
│   └── admin/
│       ├── admin.controller.ts
│       ├── admin.service.ts
│       ├── admin.repository.ts
│       └── admin.types.ts
│
│
├── lib/                                  # Infrastructure Layer
│   │
│   ├── db/
│   │   └── prisma.ts
│   │
│   ├── auth/
│   │   ├── jwt.ts
│   │   ├── password.ts
│   │   └── session.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── role.middleware.ts
│   │
│   ├── ai/
│   │   └── openai.ts
│   │
│   ├── env.ts
│   ├── logger.ts
│   ├── errors.ts
│   ├── response.ts
│   └── utils.ts
│
│
├── prisma/                               # Database Schema & Migrations
│   ├── schema.prisma
│   └── migrations/
│
│
├── components/                           # Reusable UI
├── hooks/                                # Custom React hooks
├── types/                                # Global shared types
├── constants/                            # Static values
└── styles/


```
