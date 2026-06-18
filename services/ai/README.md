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

See [`../../docs/AI_BACKEND_ARCHITECTURE.md`](../../docs/AI_BACKEND_ARCHITECTURE.md)
before adding providers, database models, or public product endpoints.
