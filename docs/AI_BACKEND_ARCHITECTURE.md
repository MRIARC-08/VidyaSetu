# Python AI Backend Architecture

## Purpose

VidyaSetu uses a separate Python service for model-oriented workloads:

- multilingual text embeddings
- document chunking and indexing
- semantic and hybrid retrieval
- Groq LLM calls through LangChain
- structured quiz generation
- rubric-based subjective answer evaluation
- grounded answers with source citations

This service is internal infrastructure. Next.js remains the public application
backend and the source of truth for users, permissions, quizzes, notes, and
analytics.

## System Boundary

```txt
Browser
   |
   | session cookie
   v
Next.js application
   |-- authenticates the user
   |-- verifies ownership and roles
   |-- stores product records through Prisma
   |
   | X-Internal-API-Key
   v
FastAPI AI service
   |-- validates internal service authentication
   |-- retrieves only the authorized resource scope
   |-- embeds and retrieves relevant content
   |-- invokes Groq through LangChain
   |-- returns validated structured output
   |
   +--> PostgreSQL + pgvector
   +--> Groq API
```

The browser must never receive the internal service key, a platform Groq key,
or a decrypted user-owned provider key.

## Responsibilities

### Next.js Owns

- browser-facing API routes
- user authentication and authorization
- user and admin workflows
- resource ownership checks
- encrypted storage of user-owned provider credentials
- product database models and final persistence
- user-visible rate-limit and error responses

### Python Owns

- embedding model lifecycle
- content normalization and chunking
- vector indexing and retrieval
- prompt templates and prompt versions
- Groq provider integration
- structured output validation
- AI-specific evaluation and observability

### Shared Contracts

- versioned internal HTTP schemas
- stable resource identifiers
- request correlation IDs
- AI job and generation status values
- database ownership for dedicated `ai_*` tables

Only one service may own migrations for a table. Product tables remain owned
by Prisma. Dedicated vector and indexing tables should have an explicitly
documented migration owner before implementation begins.

## Repository Layout

```txt
services/ai/
├── src/vidyasetu_ai/
│   ├── api/          # versioned HTTP routes
│   ├── core/         # configuration and service authentication
│   ├── schemas/      # Pydantic request and response contracts
│   ├── providers/    # embedding and LLM adapters
│   ├── retrieval/    # chunking, indexing, search, and reranking
│   ├── workflows/    # deterministic AI use cases
│   └── repositories/ # AI-owned persistence
└── tests/
```

The future-facing directories in this diagram should be added only when their
first implementation is introduced.

## API Rules

- Internal endpoints live under `/api/v1`.
- Liveness and readiness probes remain unversioned under `/health`.
- Every non-health endpoint requires `X-Internal-API-Key`.
- Requests use Pydantic schemas and reject unknown or invalid fields.
- Error responses must not include prompts, source documents, or provider keys.
- Long-running indexing requests return a job identifier instead of holding an
  HTTP connection open.
- Every write operation must support an idempotency key.

The initial scaffold exposes:

```txt
GET /health/live
GET /health/ready
GET /api/v1/internal/ping
```

## Content Indexing Flow

1. Next.js creates or updates a chapter or note.
2. Next.js submits an indexing job with the resource ID, resource type,
   content version, and authorized scope.
3. A worker loads the content from an approved source.
4. The content is normalized and split using heading-aware boundaries.
5. A content hash prevents unchanged content from being embedded again.
6. Sentence Transformers creates document embeddings.
7. Chunks and metadata are upserted into pgvector.
8. Old chunks for the previous content version are removed transactionally.

Index metadata must include the source type, source ID, owner or visibility
scope, content version, chunk order, heading path, language, and content hash.

## Retrieval Flow

1. Next.js authenticates the user and sends an allowed resource scope.
2. The AI service creates a query embedding using `encode_query`.
3. Retrieval filters by authorization metadata before ranking.
4. Vector similarity and PostgreSQL full-text ranking are combined.
5. Optional reranking may be added after baseline retrieval is measured.
6. The service returns chunks with source identifiers and relevance scores.

Authorization filtering after retrieval is not acceptable because unauthorized
content may already have influenced ranking or generation.

## Generation Flow

LangChain is an implementation library, not the service boundary.

Each workflow should be an explicit, deterministic chain:

```txt
validated input
  -> authorized retrieval
  -> versioned prompt
  -> ChatGroq
  -> Pydantic structured output
  -> domain validation
  -> result
```

Agents are out of scope for the initial implementation. LangGraph should be
introduced only when a workflow genuinely requires persisted, multi-step state.

## Embedding Model

The default configuration uses `intfloat/multilingual-e5-base` because
VidyaSetu content may contain English and Hindi. Model choice must remain
configurable and should be validated against an NCERT retrieval benchmark
before production rollout.

The embedding model must:

- load once per worker process
- use a persistent model cache
- expose model name and embedding dimension in index metadata
- use the model's required query and document prefixes
- avoid downloading weights during every application request

Changing the model or embedding dimension requires a versioned reindex.

## Groq and BYOK

The service supports two credential sources:

1. A platform Groq key configured as `AI_GROQ_API_KEY`.
2. An optional user-owned Groq key resolved by Next.js for a single request.

User-owned keys require the following design:

- keys are submitted to Next.js over HTTPS
- keys are encrypted at rest using a managed encryption key
- only a credential reference is placed in queues
- a worker resolves and decrypts the key at execution time
- plaintext exists only in process memory for the provider call
- keys are redacted from logs, traces, exceptions, and analytics
- users can validate, replace, and revoke a key
- arbitrary provider base URLs are not accepted

The Python service must not persist a user-owned key.

## Security

- Treat retrieved content as untrusted data, never as system instructions.
- Delimit source content clearly in prompts.
- Restrict retrieval by user and resource scope at query time.
- Limit request body size, chunk count, output tokens, and provider timeout.
- Use constant-time comparison for internal service credentials.
- Rotate the internal service key without exposing it to clients.
- Send the minimum required context to Groq and omit personal identifiers.
- Do not store raw prompts or retrieved note content in logs by default.

## Reliability

- Indexing runs asynchronously and is retryable.
- Jobs are idempotent by resource ID and content version.
- Groq calls use bounded exponential backoff for retryable responses.
- Provider timeouts and rate limits map to stable internal error codes.
- Generation persistence must distinguish pending, completed, and failed runs.
- Readiness should eventually verify database and model availability without
  triggering expensive model work on every probe.

## Observability

Every AI request should carry a correlation ID across Next.js, the Python
service, the worker, and provider calls.

Record:

- workflow and prompt version
- provider and model
- embedding model and index version
- retrieved source and chunk IDs
- latency by stage
- input and output token counts
- retry count and terminal status
- structured validation failures

Sensitive source text and provider credentials must not be recorded.

## Testing Strategy

- Unit tests for chunking, schemas, provider adapters, and prompt rendering.
- Repository tests against PostgreSQL with pgvector enabled.
- Contract tests between Next.js DTOs and FastAPI schemas.
- Retrieval tests using a curated English and Hindi NCERT dataset.
- Workflow tests with provider calls replaced by deterministic fakes.
- Security tests for cross-user retrieval, prompt injection, and key redaction.
- End-to-end tests for quiz generation and subjective evaluation.

Tests should not require a real Groq key unless explicitly marked as an
external integration test.

## Local Development

Follow [`../services/ai/README.md`](../services/ai/README.md).

The root `.env` configures how Next.js reaches the service:

```env
AI_SERVICE_URL="http://localhost:8001"
AI_SERVICE_API_KEY="replace-with-at-least-32-characters"
```

The service uses the same value under its own prefixed setting:

```env
AI_INTERNAL_API_KEY="replace-with-at-least-32-characters"
```

## Contribution Order

The implementation should proceed in this order:

1. service foundation and CI
2. pgvector schema and repository boundary
3. chunking and embedding model lifecycle
4. asynchronous indexing and deletion
5. authorization-aware retrieval and evaluation
6. Groq provider and credential resolution
7. structured quiz and evaluation workflows
8. Next.js integration and end-to-end tests
9. production deployment, budgets, and observability

Pull requests should stay within one milestone unless a cross-service contract
requires a small coordinated change.
