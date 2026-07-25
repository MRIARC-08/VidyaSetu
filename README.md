# VidyaSetu

![GSSoC 2026](https://img.shields.io/badge/GSSoC-2026-blueviolet)
![Open Source](https://img.shields.io/badge/Open%20Source-Contributions%20Welcome-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)

AI-powered adaptive study and assessment platform for NCERT-based learning.

VidyaSetu helps students move from passive studying to structured practice with chapter-wise study material, quiz workflows, subjective answer evaluation, and analytics.

- Live app: https://vidya-setu-pi.vercel.app/
- Codebase docs: https://vidya-setu-pi.vercel.app/docs


## Table of Contents

- [GSSoC 2026](#gssoc-2026)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Environment Setup](#environment-setup)
    - [Database Setup](#database-setup)
    - [Install And Run](#install-and-run)
    - [Python AI Service](#python-ai-service)
    - [Seed Data](#seed-data)
    - [CI/CD](#cicd)
- [Useful Commands](#useful-commands)
- [Contributing](#contributing)
- [License](#license)


## GSSoC 2026

This project is part of GirlScript Summer of Code 2026.

Contributors can start by checking issues labeled:

- `good first issue`
- `beginner friendly`
- `gssoc`
- `documentation`
- `bug`
- `enhancement`

## Features

- NCERT class, subject, and chapter browsing
- Chapter-based quiz creation
- Practice, test, and revision quiz modes
- Subjective answer evaluation workflow
- Notes upload and extraction workflow
- Student dashboard and analytics views
- Admin flows for NCERT and question management

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- NextAuth
- Cloudinary
- FastAPI
- Sentence Transformers
- LangChain with Groq

## Getting Started

### Prerequisites

- Node.js
- pnpm
- PostgreSQL database
- Python 3.11 to 3.13 when working on the AI service

You can use either a hosted PostgreSQL database or a local PostgreSQL database through Docker.

## Environment Setup

Create your local environment file:

```bash
cp .env.example .env
```

Never commit `.env`. Use your own database credentials and API keys.

### Environment Variables

#### `DATABASE_URL`

This is the PostgreSQL connection string used by the app at runtime.

If you use Docker, keep the default value from `.env.example`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/vidyasetu"
```

If you use Supabase, Neon, Railway, or another hosted PostgreSQL provider, copy the PostgreSQL connection string from that provider and paste it here.

#### `DIRECT_URL`

This is the direct PostgreSQL connection string used by Prisma migrations.

If you use Docker, keep the default value from `.env.example`:

```env
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/vidyasetu"
```

If you use Supabase, use the direct database connection URL, not only the pooled URL. Prisma migrations work best with a direct connection.

#### `JWT_SECRET`

This is used to sign authentication tokens.

For local development, generate a random value:

```bash
openssl rand -base64 32
```

Then paste it into `.env`:

```env
JWT_SECRET="your-generated-secret"
```

#### `NEXTAUTH_URL`

For local development, use:

```env
NEXTAUTH_URL="http://localhost:3000"
```

For deployment, use your deployed app URL.

#### `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`

These are needed only for Google login.

To get them:

1. Go to Google Cloud Console.
2. Create or select a project.
3. Configure the OAuth consent screen.
4. Create OAuth credentials for a web application.
5. Add this authorized redirect URI for local development:

```text
http://localhost:3000/api/auth/callback/google
```

6. Copy the generated client ID and client secret into `.env`:

```env
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

If you are not working on authentication, you can leave these empty for local development.

#### Cloudinary Variables

Cloudinary is optional for now and is not required for the main contributor setup.

Only add these if you are working on upload or media-related features:

```env
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
```

You can get these values from your own Cloudinary dashboard after creating a free Cloudinary account.

## Database Setup

### Option A: Hosted PostgreSQL

Use this option if you do not have Docker installed.

Create a free PostgreSQL database using Supabase, Neon, Railway, or another PostgreSQL provider. Then update these values in `.env`:

```env
DATABASE_URL="your-hosted-postgresql-url"
DIRECT_URL="your-direct-postgresql-url"
```

For Supabase, `DATABASE_URL` usually points to the pooled connection URL and `DIRECT_URL` points to the direct connection URL used by Prisma migrations.

### Option B: Docker PostgreSQL

Use this option if you have Docker installed and want a local database.

Start PostgreSQL:

```bash
docker compose up -d
```

The default `.env.example` database URLs already match the Docker database:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/vidyasetu"
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/vidyasetu"
```

## Install And Run

Install dependencies:

```bash
pnpm install
```

Generate the Prisma client:

```bash
pnpm db:generate
```

Run migrations:

```bash
pnpm db:migrate
```

Seed the database:

```bash
pnpm db:seed
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Python AI Service

VidyaSetu keeps model inference, embeddings, retrieval, and provider
integrations in a separate internal FastAPI service under `services/ai`.
The browser must communicate with the Next.js application, not directly with
the AI service.

For local setup:

```bash
cd services/ai
cp .env.example .env
python3.13 -m venv .venv
source .venv/bin/activate
python -m pip install -e ".[dev,models]"
uvicorn vidyasetu_ai.main:app --reload --port 8001
```

Open `http://localhost:8001/docs` for the internal OpenAPI documentation.

See [Python AI Backend Architecture](docs/AI_BACKEND_ARCHITECTURE.md) for
service boundaries, security rules, BYOK handling, data flows, and contributor
guidance.

## Seed Data

The seed script populates your own local or hosted contributor database with NCERT academic classes, subjects, chapters, and direct PDF links.

Contributors do not need access to the maintainer's production database.

The repository also includes learner-facing markdown content in `seed-data/learner-md`.

Preview chapter content mapping without writing to the database:

```bash
CONTENT_SEED_DRY_RUN=true pnpm db:seed:content
```

To seed chapter content:

```bash
pnpm db:seed:content
```

This stores matched markdown in `Chapter.content` with `contentFormat` and `contentSource` metadata. Missing subjects, missing chapters, and title mismatches are skipped with warnings instead of failing the seed.

To run both metadata and content seeds:

```bash
pnpm db:seed:all
```

## CI/CD

This repository uses GitHub Actions.

### CI

The `CI` workflow runs on pull requests and pushes to `main` or `home`.

It checks:

- dependency installation with pnpm
- Prisma client generation
- production build
- non-blocking lint report

The lint report is currently non-blocking because the repo still has existing lint cleanup work tracked separately.

### Vercel Deployments

The Vercel workflows are optional and skip automatically if deployment secrets are not configured.

To enable Vercel preview and production deployments, add these repository secrets:

```txt
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Preview deployments run for pull requests. Production deployments run on pushes to `main` or `home`, and can also be triggered manually from GitHub Actions.

## Useful Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm db:generate
pnpm db:migrate
pnpm db:seed
pnpm db:seed:content
pnpm db:seed:all
pnpm db:studio
```

AI service commands are documented in
[`services/ai/README.md`](services/ai/README.md).

## Contributing

Before contributing, read:

- [Code of Conduct](CODE_OF_CONDUCT.md)
- Codebase docs at `/docs`

1. Fork the repository.
2. Clone your fork.
3. Create `.env` from `.env.example`.
4. Set up PostgreSQL using either hosted PostgreSQL or Docker.
5. Run migrations and seed your database.
6. Create a feature branch.
7. Open a pull request.

Do not request or use production database access for local development.

### Recommended Repository Labels

Maintainers can use these labels to make contribution discovery easier:

- `gssoc`
- `gssoc:approved`
- `gssoc:level1`
- `gssoc:level2`
- `gssoc:level3`
- `good first issue`
- `beginner friendly`
- `documentation`
- `bug`
- `enhancement`

## Contributors

Thanks to everyone who helps improve VidyaSetu.

<a href="https://github.com/MRIARC-08/VidyaSetu/graphs/contributors">
  <img
    src="https://contrib.rocks/image?repo=MRIARC-08/VidyaSetu"
    alt="VidyaSetu contributors"
  />
</a>

## License

MIT
