# AI Schema Ownership

## Rule: One service, one schema

VidyaSetu uses two migration systems:

| System | Owner | Tables |
|--------|-------|--------|
| Prisma (Next.js) | Next.js app | All product tables (`User`, `Quiz`, `Note`, etc.) |
| Alembic (Python AI service) | `services/ai` | `ai_documents`, `ai_chunks` |

**Neither system may create, alter, or drop tables owned by the other.**

---

## AI-owned tables

### `ai_documents`
Stores indexed source documents (NCERT chapters, user notes, etc.).

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `source_type` | Text | e.g. `ncert_chapter`, `user_note` |
| `source_id` | Text | ID from the product database |
| `owner_id` | Text | User ID for private content, null for public |
| `visibility` | Text | `public` or `private` |
| `content_hash` | Text | SHA-256 of source content for change detection |
| `language` | Text | BCP-47 language tag, default `en` |
| `created_at` | Timestamptz | Row creation time |
| `updated_at` | Timestamptz | Last update time |

### `ai_chunks`
Stores text chunks and their vector embeddings.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `document_id` | UUID | FK to `ai_documents.id` |
| `heading_path` | Text | e.g. `Chapter 1 > Section 2` |
| `chunk_order` | Integer | Position within document |
| `embedding_model` | Text | Model used e.g. `intfloat/multilingual-e5-base` |
| `embedding_dim` | Integer | Vector dimension e.g. `768` |
| `chunk_text` | Text | Raw text of the chunk |
| `embedding` | vector(768) | pgvector embedding |
| `token_count` | BigInteger | Approximate token count |
| `created_at` | Timestamptz | Row creation time |

---

## Running migrations

### Local (requires PostgreSQL with pgvector)
```bash
cd services/ai
alembic upgrade head
```

### Rollback
```bash
cd services/ai
alembic downgrade base
```

---

## Enabling pgvector

### Local PostgreSQL
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

### Supabase / managed PostgreSQL
Enable via dashboard: Database → Extensions → vector

---

## Key rotation / schema changes
- All changes to `ai_documents` or `ai_chunks` must go through a new Alembic version file in `services/ai/src/vidyasetu_ai/db/migrations/versions/`.
- Never hand-edit production tables.
- Never add a Prisma model for these tables.