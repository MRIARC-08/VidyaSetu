# Contributing

Thank you for contributing to VidyaSetu.

## Development Setup

Clone the repository:

```bash
git clone <repository-url>
cd VidyaSetu
```

Install dependencies:

```bash
pnpm install
```

Create environment file:

```bash
cp .env.example .env
```

Generate Prisma client:

```bash
pnpm db:generate
```

Run migrations:

```bash
pnpm db:migrate
```

Seed database:

```bash
pnpm db:seed:all
```

Start development server:

```bash
pnpm dev
```

## Branch Naming

Recommended:

```txt
feat/feature-name
fix/bug-name
docs/documentation-name
test/test-name
```

Examples:

```txt
feat-auth-refresh
fix-quiz-session
docs-api-guide
```

## Commit Messages

Recommended format:

```txt
feat(auth): add refresh token support
fix(notes): handle upload failures
docs(api): add endpoint documentation
```

## Pull Requests

Before opening a PR:

* Sync with latest main branch
* Run lint checks
* Run tests
* Verify build succeeds
* Update documentation if needed

## Code Style

* Use TypeScript
* Follow ESLint rules
* Use Prettier formatting
* Keep modules domain focused

## Project Structure

```txt
src/app
src/modules
src/lib
src/components
src/prisma
```
