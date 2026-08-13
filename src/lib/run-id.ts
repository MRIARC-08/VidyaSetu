import { randomUUID } from 'crypto';

/**
 * Generate a correlation ID for tracing a single AI workflow run
 * across Next.js and the Python AI service.
 * Format: run_<uuid> — prefix makes it easy to grep in logs.
 */
export function generateRunId(): string {
  return `run_${randomUUID()}`;
}
