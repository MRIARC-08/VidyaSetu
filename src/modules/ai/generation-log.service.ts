import { prisma } from '@/lib/prisma';
import type { CreateGenerationLogInput } from './ai.types';

export class GenerationLogService {
  /**
   * Persist one AI run log entry.
   * Never logs prompt text, answers, or credentials — only metadata.
   */
  static async create(input: CreateGenerationLogInput) {
    return prisma.aIGenerationLog.create({
      data: {
        userId: input.userId,
        quizId: input.quizId,
        runId: input.runId,
        workflow: input.workflow,
        promptVersion: input.promptVersion,
        provider: input.provider,
        modelUsed: input.modelUsed,
        embeddingModel: input.embeddingModel,
        promptTokens: input.promptTokens,
        completionTokens: input.completionTokens,
        costEstimate: input.costEstimate,
        retrievedChunkIds: input.retrievedChunkIds ?? [],
        stageLatencyMs: input.stageLatencyMs ?? undefined,
        retryCount: input.retryCount ?? 0,
        errorCode: input.errorCode,
        status: input.status,
      },
    });
  }

  /**
   * Fetch all logs for a user ordered by most recent.
   * Returns metadata only — never prompt content.
   */
  static async listByUser(userId: string, limit = 20) {
    return prisma.aIGenerationLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        runId: true,
        workflow: true,
        promptVersion: true,
        provider: true,
        modelUsed: true,
        embeddingModel: true,
        promptTokens: true,
        completionTokens: true,
        costEstimate: true,
        retrievedChunkIds: true,
        stageLatencyMs: true,
        retryCount: true,
        errorCode: true,
        status: true,
        createdAt: true,
      },
    });
  }

  /**
   * Find all logs for a specific run ID (cross-service trace).
   */
  static async findByRunId(runId: string) {
    return prisma.aIGenerationLog.findMany({
      where: { runId },
      orderBy: { createdAt: 'asc' },
    });
  }
}
