import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    aIGenerationLog: {
      create: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));

import { prisma } from '@/lib/prisma';
import { GenerationLogService } from './generation-log.service';

const mockCreate = prisma.aIGenerationLog.create as ReturnType<typeof vi.fn>;
const mockFindMany = prisma.aIGenerationLog.findMany as ReturnType<
  typeof vi.fn
>;

beforeEach(() => {
  vi.clearAllMocks();
});

describe('GenerationLogService.create', () => {
  it('persists a log entry with required fields', async () => {
    mockCreate.mockResolvedValue({ id: 'log-1' });

    await GenerationLogService.create({
      userId: 'user-1',
      modelUsed: 'llama3-8b-8192',
      status: 'success',
    });

    expect(mockCreate).toHaveBeenCalledOnce();
    const data = mockCreate.mock.calls[0][0].data;
    expect(data.userId).toBe('user-1');
    expect(data.modelUsed).toBe('llama3-8b-8192');
    expect(data.status).toBe('success');
  });

  it('defaults retrievedChunkIds to empty array', async () => {
    mockCreate.mockResolvedValue({ id: 'log-2' });

    await GenerationLogService.create({
      userId: 'user-1',
      modelUsed: 'llama3-8b-8192',
      status: 'success',
    });

    const data = mockCreate.mock.calls[0][0].data;
    expect(data.retrievedChunkIds).toEqual([]);
  });

  it('defaults retryCount to 0', async () => {
    mockCreate.mockResolvedValue({ id: 'log-3' });

    await GenerationLogService.create({
      userId: 'user-1',
      modelUsed: 'llama3-8b-8192',
      status: 'error',
      errorCode: 'RATE_LIMIT',
    });

    const data = mockCreate.mock.calls[0][0].data;
    expect(data.retryCount).toBe(0);
  });

  it('never includes prompt text fields', async () => {
    mockCreate.mockResolvedValue({ id: 'log-4' });

    await GenerationLogService.create({
      userId: 'user-1',
      modelUsed: 'llama3-8b-8192',
      status: 'success',
      workflow: 'quiz_generation',
      runId: 'run_abc123',
    });

    const data = mockCreate.mock.calls[0][0].data;
    expect(data).not.toHaveProperty('promptText');
    expect(data).not.toHaveProperty('responseText');
    expect(data).not.toHaveProperty('apiKey');
  });

  it('stores runId and workflow for cross-service tracing', async () => {
    mockCreate.mockResolvedValue({ id: 'log-5' });

    await GenerationLogService.create({
      userId: 'user-1',
      modelUsed: 'llama3-8b-8192',
      status: 'success',
      runId: 'run_abc123',
      workflow: 'quiz_generation',
    });

    const data = mockCreate.mock.calls[0][0].data;
    expect(data.runId).toBe('run_abc123');
    expect(data.workflow).toBe('quiz_generation');
  });
});

describe('GenerationLogService.listByUser', () => {
  it('queries by userId ordered by createdAt desc', async () => {
    mockFindMany.mockResolvedValue([]);

    await GenerationLogService.listByUser('user-1');

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { userId: 'user-1' },
        orderBy: { createdAt: 'desc' },
      })
    );
  });

  it('respects custom limit', async () => {
    mockFindMany.mockResolvedValue([]);

    await GenerationLogService.listByUser('user-1', 5);

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ take: 5 })
    );
  });

  it('select does not include prompt content fields', async () => {
    mockFindMany.mockResolvedValue([]);

    await GenerationLogService.listByUser('user-1');

    const select = mockFindMany.mock.calls[0][0].select;
    expect(select).not.toHaveProperty('promptText');
    expect(select).not.toHaveProperty('responseText');
  });
});

describe('GenerationLogService.findByRunId', () => {
  it('queries by runId ordered asc', async () => {
    mockFindMany.mockResolvedValue([]);

    await GenerationLogService.findByRunId('run_abc123');

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { runId: 'run_abc123' },
        orderBy: { createdAt: 'asc' },
      })
    );
  });
});
