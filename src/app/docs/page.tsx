import Link from 'next/link';
import {
  AlertTriangle,
  BookOpen,
  Boxes,
  Database,
  FileCode2,
  GitPullRequest,
  KeyRound,
  Layers3,
  Route,
  ServerCog,
  TerminalSquare,
  Wrench,
} from 'lucide-react';

const architectureLayers = [
  {
    title: 'App Router Pages',
    path: 'src/app',
    description:
      'Route-based screens for public pages, auth, dashboard, NCERT explorer, notes, quiz, profile, and admin flows.',
  },
  {
    title: 'API Routes',
    path: 'src/app/api',
    description:
      'Next.js route handlers that receive browser requests and delegate work to domain modules.',
  },
  {
    title: 'Domain Modules',
    path: 'src/modules',
    description:
      'Feature logic grouped by auth, admin, NCERT, quiz, notes, AI, analytics, and user concerns.',
  },
  {
    title: 'Shared Libraries',
    path: 'src/lib',
    description:
      'Reusable helpers for Prisma, auth, cookies, Cloudinary, logging, responses, and provider integrations.',
  },
  {
    title: 'Database Schema',
    path: 'src/prisma/schema.prisma',
    description:
      'Prisma models for users, NCERT structure, notes, quizzes, sessions, responses, AI logs, and analytics.',
  },
  {
    title: 'Generated Prisma Client',
    path: 'src/generated/prisma',
    description:
      'Generated after running pnpm db:generate. This folder is ignored and should not be manually edited.',
  },
];

const requestFlow = [
  'A page or client component calls an API route under src/app/api.',
  'The API route calls the matching controller in src/modules.',
  'The controller validates input and calls the service layer.',
  'The service handles business rules and calls repositories or providers.',
  'Repositories use Prisma to read or write PostgreSQL data.',
  'The API route returns a structured response to the frontend.',
];

const dataModels = [
  'User and Account handle credentials, OAuth accounts, refresh tokens, profile state, and roles.',
  'AcademicClass, Subject, Chapter, and Topic represent the NCERT content structure.',
  'Question and Option store MCQ and subjective question data.',
  'Quiz, QuizSession, and QuestionResponse track quiz creation, attempts, scores, and timing.',
  'SubjectiveEvaluation stores feedback and ideal answers for written responses.',
  'Note stores uploaded or pasted study material and extracted text.',
  'UserStats stores aggregate analytics for student progress.',
  'AIGenerationLog tracks AI provider usage, status, token counts, and cost estimates.',
];

const contributorTasks = [
  {
    title: 'Add or adjust a page',
    start: 'src/app',
    note: 'Use the App Router route folder that matches the URL you are changing.',
  },
  {
    title: 'Change backend behavior',
    start: 'src/modules',
    note: 'Update the relevant controller, service, repository, validator, or type file.',
  },
  {
    title: 'Change database structure',
    start: 'src/prisma/schema.prisma',
    note: 'Update the schema, create a migration, then regenerate the Prisma client.',
  },
  {
    title: 'Work on NCERT data',
    start: 'src/modules/ncert and src/prisma/seed.ts',
    note: 'Use seed data for class, subject, chapter, and PDF link setup.',
  },
  {
    title: 'Work on auth',
    start: 'src/modules/auth and src/lib/auth',
    note: 'Check token creation, cookies, refresh logic, and route handlers together.',
  },
  {
    title: 'Work on quiz flow',
    start: 'src/modules/quiz and src/app/quiz',
    note: 'Trace quiz creation, session start, response submission, and scoring.',
  },
];

const routeMap = [
  {
    route: '/',
    files: 'src/app/page.tsx',
    purpose: 'Landing page and entry point for unauthenticated visitors.',
  },
  {
    route: '/docs',
    files: 'src/app/docs/page.tsx',
    purpose: 'Public contributor documentation for codebase orientation.',
  },
  {
    route: '/login and /register',
    files: 'src/app/(auth)',
    purpose: 'Authentication screens and account onboarding flows.',
  },
  {
    route: '/dashboard',
    files: 'src/app/dashboard',
    purpose: 'Student overview, progress entry point, and learning shortcuts.',
  },
  {
    route: '/ncert',
    files: 'src/app/ncert and src/modules/ncert',
    purpose: 'Class, subject, chapter, topic, and NCERT PDF exploration.',
  },
  {
    route: '/quiz',
    files: 'src/app/quiz and src/modules/quiz',
    purpose: 'Quiz creation, quiz sessions, answer submission, and scoring.',
  },
  {
    route: '/notes',
    files: 'src/app/notes and src/modules/notes',
    purpose: 'Notes upload, extraction, storage, and note-based workflows.',
  },
  {
    route: '/admin',
    files: 'src/app/admin and src/modules/admin',
    purpose: 'Admin-facing flows for seed/admin operations and analytics.',
  },
];

const moduleDetails = [
  {
    module: 'auth',
    owns: 'registration, login, refresh tokens, cookies, password hashing, and session helpers',
    files: 'src/modules/auth and src/lib/auth',
  },
  {
    module: 'ncert',
    owns: 'classes, subjects, chapters, topics, and NCERT content lookup',
    files: 'src/modules/ncert',
  },
  {
    module: 'quiz',
    owns: 'quiz creation, session start, submitted answers, scoring, and quiz records',
    files: 'src/modules/quiz',
  },
  {
    module: 'notes',
    owns: 'note records, extracted text, file URLs, and note upload workflows',
    files: 'src/modules/notes',
  },
  {
    module: 'ai',
    owns: 'AI provider boundary, question generation, and subjective answer evaluation',
    files: 'src/modules/ai and src/lib/ai',
  },
  {
    module: 'analytics',
    owns: 'student performance summaries, weak topic detection, and aggregate stats',
    files: 'src/modules/analytics',
  },
  {
    module: 'admin',
    owns: 'admin-only actions, privileged content management, and admin dashboard data',
    files: 'src/modules/admin',
  },
  {
    module: 'user',
    owns: 'profile reads, profile updates, and user-facing account metadata',
    files: 'src/modules/user',
  },
];

const prismaLifecycle = [
  {
    command: 'pnpm db:generate',
    when: 'After cloning, after schema changes, or when generated Prisma imports are missing.',
  },
  {
    command: 'pnpm db:migrate',
    when: 'After setting DATABASE_URL and DIRECT_URL, and after changing schema.prisma.',
  },
  {
    command: 'pnpm db:seed',
    when: 'After migrations, when you need NCERT classes, subjects, chapters, and PDF links.',
  },
  {
    command: 'pnpm db:studio',
    when: 'When you want to inspect local database records in a browser.',
  },
];

const envNotes = [
  {
    name: 'DATABASE_URL',
    detail:
      'Runtime database URL. Use Docker Postgres locally or a hosted PostgreSQL provider.',
  },
  {
    name: 'DIRECT_URL',
    detail:
      'Migration database URL. Prisma migrations should use a direct database connection.',
  },
  {
    name: 'JWT_SECRET',
    detail:
      'Local token signing secret. Generate one with openssl rand -base64 32.',
  },
  {
    name: 'NEXTAUTH_URL',
    detail:
      'Use http://localhost:3000 locally. Use the deployed app URL in production.',
  },
  {
    name: 'GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET',
    detail:
      'Only required for Google login. Contributors not touching auth can leave them empty.',
  },
  {
    name: 'Cloudinary variables',
    detail:
      'Optional for now. Add them only when working on uploads or media features.',
  },
];

const commonIssues = [
  {
    problem: 'Cannot find generated Prisma client',
    fix: 'Run pnpm db:generate. The generated client folder is intentionally ignored by git.',
  },
  {
    problem: 'Migration fails with missing DIRECT_URL',
    fix: 'Set DIRECT_URL in .env. This project uses DIRECT_URL in prisma.config.ts.',
  },
  {
    problem: 'Docker Postgres port conflict',
    fix: 'Another Postgres may already be using 5432. Stop it or change the Docker port mapping.',
  },
  {
    problem: 'Dashboard or analytics looks empty',
    fix: 'Seed data creates NCERT metadata, not full user history. Create quizzes/attempts locally.',
  },
  {
    problem: 'Google login does not work locally',
    fix: 'Add Google OAuth credentials or use non-OAuth flows while working on unrelated features.',
  },
  {
    problem: 'Full pnpm lint fails',
    fix: 'Some existing files still need lint cleanup. Run ESLint on files you changed for focused checks.',
  },
];

const prChecklist = [
  'Keep one pull request focused on one bug, feature, or documentation improvement.',
  'Mention which page, module, or API route you changed.',
  'Run the most relevant check, such as pnpm eslint path/to/file.tsx.',
  'Add screenshots for UI changes when possible.',
  'Do not commit .env, database credentials, generated Prisma files, or local build output.',
  'Explain any setup assumptions, skipped checks, or known limitations in the PR description.',
];

const setupSteps = [
  'Copy .env.example to .env.',
  'Choose hosted PostgreSQL or Docker PostgreSQL.',
  'Run pnpm install.',
  'Run pnpm db:generate.',
  'Run pnpm db:migrate.',
  'Run pnpm db:seed.',
  'Run pnpm dev.',
];

function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-secondary">
        {label}
      </p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-secondary md:text-base">
        {children}
      </p>
    </div>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-black/10 px-6 py-6 md:px-10">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold uppercase">
            VidyaSetu
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/ncert" className="text-secondary hover:text-black">
              NCERT
            </Link>
            <Link href="/dashboard" className="text-secondary hover:text-black">
              Dashboard
            </Link>
          </div>
        </nav>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-10">
        <SectionHeading label="Route Map" title="URLs and owning files">
          Use this map when you are not sure where a feature starts. For UI
          issues, open the route file first. For data or behavior issues, follow
          the route into the matching API handler and module.
        </SectionHeading>

        <div className="mt-10 overflow-hidden border border-black/10">
          <div className="hidden grid-cols-[0.7fr_1fr_1.3fr] bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white md:grid">
            <p>Route</p>
            <p>Files</p>
            <p>Purpose</p>
          </div>
          {routeMap.map((item) => (
            <div
              key={item.route}
              className="grid gap-3 border-t border-black/10 p-5 text-sm md:grid-cols-[0.7fr_1fr_1.3fr]"
            >
              <p className="font-mono font-semibold">{item.route}</p>
              <p className="font-mono text-xs text-secondary">{item.files}</p>
              <p className="leading-6 text-secondary">{item.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-secondary">
              Contributor Docs
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
              Understand the VidyaSetu codebase before you contribute.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-secondary md:text-lg">
              This page explains the project structure, request flow, database
              model, setup path, and the best files to open for common
              contribution tasks.
            </p>
          </div>

          <div className="border-l border-black/20 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider">
              First local run
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {setupSteps.map((step, index) => (
                <div key={step} className="flex gap-3 text-sm text-secondary">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-black text-[12px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-14 md:px-10">
        <SectionHeading label="Architecture" title="How the code is organized">
          VidyaSetu uses a Next.js App Router frontend with API routes and
          feature modules. Most changes should start from the route or module
          that owns the feature, then move inward toward services, repositories,
          Prisma, and shared libraries as needed.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {architectureLayers.map((layer) => (
            <article
              key={layer.path}
              className="border border-black/10 bg-background p-6"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center bg-black text-white">
                <Layers3 size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{layer.title}</h3>
              <p className="mt-2 font-mono text-xs text-secondary">
                {layer.path}
              </p>
              <p className="mt-4 text-sm leading-6 text-secondary">
                {layer.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading label="Request Flow" title="From screen to data">
              The codebase follows a simple path from UI interaction to database
              operation. When debugging, trace the feature in this order before
              changing shared code.
            </SectionHeading>

            <div className="mt-10 flex flex-col gap-4">
              {requestFlow.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-black text-sm font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black p-8 text-white">
            <div className="flex items-center gap-3">
              <ServerCog size={22} aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Backend module shape</h2>
            </div>
            <div className="mt-8 grid gap-4">
              {[
                'controller.ts receives requests and shapes responses.',
                'service.ts owns business rules and orchestration.',
                'repository.ts owns database access.',
                'validator.ts validates incoming payloads.',
                'types.ts keeps feature-specific TypeScript contracts.',
              ].map((item) => (
                <p
                  key={item}
                  className="border border-white/15 p-4 text-sm leading-6 text-white/75"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-10">
        <SectionHeading label="Modules" title="Feature ownership boundaries">
          Each module owns a domain of behavior. When a change crosses modules,
          keep the integration explicit instead of hiding unrelated behavior in
          shared helpers.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {moduleDetails.map((module) => (
            <article key={module.module} className="border border-black/10 p-6">
              <div className="flex items-center gap-3">
                <ServerCog size={20} aria-hidden="true" />
                <h3 className="text-lg font-semibold">{module.module}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-secondary">
                Owns {module.owns}.
              </p>
              <p className="mt-4 font-mono text-xs text-secondary">
                {module.files}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading label="Database" title="Core Prisma models">
            PostgreSQL is the source of truth. Prisma defines the schema,
            migrations shape the database, and the generated client gives the
            app typed access to the models.
          </SectionHeading>

          <div className="grid gap-3 md:grid-cols-2">
            {dataModels.map((model) => (
              <div
                key={model}
                className="flex gap-3 border border-black/10 p-4 text-sm leading-6 text-secondary"
              >
                <Database
                  size={18}
                  className="mt-1 shrink-0 text-black"
                  aria-hidden="true"
                />
                <p>{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading label="Prisma Workflow" title="Database lifecycle">
              Schema changes are handled through Prisma. Keep schema edits,
              migrations, generated client updates, and seed behavior aligned so
              contributors can reproduce your work locally.
            </SectionHeading>

            <div className="mt-10 grid gap-4">
              {prismaLifecycle.map((item) => (
                <div
                  key={item.command}
                  className="border border-black/10 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <TerminalSquare size={18} aria-hidden="true" />
                    <p className="font-mono text-sm font-semibold">
                      {item.command}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {item.when}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading label="Environment" title="What each env var does">
              The app should run with contributor-owned credentials only. Real
              production credentials should never be shared or committed.
            </SectionHeading>

            <div className="mt-10 grid gap-4">
              {envNotes.map((item) => (
                <div
                  key={item.name}
                  className="border border-black/10 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <KeyRound size={18} aria-hidden="true" />
                    <p className="font-mono text-sm font-semibold">
                      {item.name}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <SectionHeading label="Contribution Map" title="Where to start">
          Start from the smallest area that owns the behavior. A UI-only change
          should usually stay in `src/app` or `src/components`; a data change
          should usually include Prisma and the matching module.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contributorTasks.map((task) => (
            <article key={task.title} className="border border-black/10 p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center bg-accent/40">
                <FileCode2 size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="mt-3 font-mono text-xs text-secondary">
                {task.start}
              </p>
              <p className="mt-4 text-sm leading-6 text-secondary">
                {task.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading label="Debugging" title="Common setup problems">
            Most contributor setup issues come from missing environment values,
            skipped Prisma generation, database connection mismatches, or
            expecting seed data to include full demo activity.
          </SectionHeading>

          <div className="grid gap-4">
            {commonIssues.map((item) => (
              <article
                key={item.problem}
                className="border border-black/10 p-5"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle size={18} aria-hidden="true" />
                  <h3 className="font-semibold">{item.problem}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {item.fix}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="bg-black p-8 text-white">
            <div className="flex items-center gap-3">
              <GitPullRequest size={22} aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Pull request checklist</h2>
            </div>
            <div className="mt-8 grid gap-4">
              {prChecklist.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-white/25 text-xs font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/10 p-8">
            <div className="flex items-center gap-3">
              <Wrench size={22} aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Change strategy</h2>
            </div>
            <div className="mt-8 grid gap-5 text-sm leading-7 text-secondary">
              <p>
                Start with the smallest working change. If a fix only affects
                one page, keep it in that page. If multiple pages need the same
                behavior, move the repeated logic into a component or shared
                helper.
              </p>
              <p>
                For backend work, avoid putting business rules directly inside
                API route handlers. Keep request handling in route/controller
                files and place reusable behavior in services or repositories.
              </p>
              <p>
                For database work, update the Prisma schema first, create the
                migration, regenerate the client, and document any seed data
                changes that reviewers need to run.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              icon: BookOpen,
              title: 'Read setup docs',
              body: 'Use README.md for environment variables, database setup, migrations, and seed data.',
            },
            {
              icon: Database,
              title: 'Seed your database',
              body: 'Run pnpm db:seed to populate NCERT classes, subjects, chapters, and PDF links.',
            },
            {
              icon: Route,
              title: 'Trace the route',
              body: 'Find the page or API route first, then follow it into the owning module.',
            },
            {
              icon: GitPullRequest,
              title: 'Open a focused PR',
              body: 'Keep changes scoped to one issue or feature so review stays clear.',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="border border-black/10 p-6">
                <Icon size={22} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-4 bg-background p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Boxes size={22} aria-hidden="true" />
            <p className="font-semibold">Need the full setup path?</p>
          </div>
          <Link
            href="https://github.com/MRIARC-08/VidyaSetu"
            className="w-full bg-black px-5 py-3 text-center text-sm font-semibold text-white md:w-auto"
          >
            Open GitHub Repository
          </Link>
        </div>
      </section>
    </main>
  );
}
