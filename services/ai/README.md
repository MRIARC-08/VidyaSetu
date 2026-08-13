# VidyaSetu AI Service

Internal FastAPI service for embeddings, retrieval, and LLM workflows.

The service is not a public API. Next.js authenticates users, verifies resource
ownership, and calls this service using `X-Internal-API-Key`.

## Local Setup

```bash
cp .env.example .env
python3.13 -m venv .venv
source .venv/bin/activate
python -m pip install -e ".[dev,models]"
uvicorn vidyasetu_ai.main:app --reload --port 8001
```

The `models` extra is separate because Sentence Transformers installs
platform-specific ML dependencies. API and unit-test contributors can use:

```bash
python -m pip install -e ".[dev]"
```

## Checks

```bash
ruff check .
pytest
```

## Initial Endpoints

```txt
GET /health/live
GET /health/ready
GET /api/v1/internal/ping
```

The internal ping endpoint requires:

```http
X-Internal-API-Key: <AI_INTERNAL_API_KEY>
```

Example:

```bash
curl \
  -H "X-Internal-API-Key: replace-with-at-least-32-characters" \
  http://localhost:8001/api/v1/internal/ping
```

## OpenAPI Contract

The TypeScript client types in the Next.js app must stay compatible with the
FastAPI routes. A CI job validates this on every pull request.

### One-command contract update

```bash
# Regenerate openapi.json and update the golden baseline
pnpm contract:update-golden
```

This runs `scripts/export-openapi.py` (no database, model downloads, or Groq
required) and copies the result to `openapi.golden.json`.

### Workflow

1. **After adding or changing a FastAPI route**, regenerate the spec:
   ```bash
   cd services/ai && python scripts/export-openapi.py
   ```
2. **Update the golden baseline** and commit both `openapi.golden.json` and any
   TypeScript client changes:
   ```bash
   pnpm contract:update-golden
   ```
3. **Update TypeScript types** in `src/modules/` to match the new spec.
4. **CI** exports the spec from the FastAPI app, then runs
   `pnpm test:contract` to validate compatibility.

### What the contract tests check

- All expected path/method combinations exist
- No endpoints were removed without updating the test expectations
- Required authentication and security schemes are correct
- Response status codes match the golden baseline
- Error response schemas (`HTTPValidationError`, `ValidationError`) are present
- Enum values in OpenAPI match TypeScript types
- Idempotency headers are declared on write endpoints

### Updating the golden spec after an additive change

If you add a new route without removing or changing existing ones:

```bash
pnpm contract:update-golden
git add services/ai/openapi.golden.json
git commit -m "chore: update golden OpenAPI spec"
```

The golden spec is the committed baseline. The contract test compares every
CI run's exported spec against it and fails if any path, method, response
status, or component schema has been removed.

## Versioning

The service version is declared in `src/vidyasetu_ai/__init__.py` (`__version__`).
Increment it when making a breaking change to the API contract so that the
Next.js client can detect incompatibility at development time.

See [`../../docs/AI_BACKEND_ARCHITECTURE.md`](../../docs/AI_BACKEND_ARCHITECTURE.md)
before adding providers, database models, or public product endpoints.
