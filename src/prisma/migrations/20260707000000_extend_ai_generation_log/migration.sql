-- Extend AIGenerationLog with observability fields
ALTER TABLE "AIGenerationLog"
  ADD COLUMN IF NOT EXISTS "runId"           TEXT,
  ADD COLUMN IF NOT EXISTS "workflow"        TEXT,
  ADD COLUMN IF NOT EXISTS "promptVersion"   TEXT,
  ADD COLUMN IF NOT EXISTS "provider"        TEXT,
  ADD COLUMN IF NOT EXISTS "embeddingModel"  TEXT,
  ADD COLUMN IF NOT EXISTS "retrievedChunkIds" TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS "stageLatencyMs"  JSONB,
  ADD COLUMN IF NOT EXISTS "retryCount"      INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS "errorCode"       TEXT;

CREATE INDEX IF NOT EXISTS "AIGenerationLog_runId_idx" ON "AIGenerationLog"("runId");
CREATE INDEX IF NOT EXISTS "AIGenerationLog_workflow_idx" ON "AIGenerationLog"("workflow");