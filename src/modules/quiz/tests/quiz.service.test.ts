import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QuizService, QuizServices } from '../quiz.service';

// Mock the global Prisma client using the path alias configuration
vi.mock('@/config/db', () => ({
  prisma: {
    quizSession: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
    quizResponse: {
      createMany: vi.fn(),
    },
    userStreak: {
      update: vi.fn(),
    },
    $transaction: vi.fn(),
  },
}));

describe('Quiz Submission Atomicity & Idempotency (MRIARC-08)', () => {
  let quizService: QuizService;

  beforeEach(() => {
    vi.clearAllMocks();
    quizService = new QuizService();
  });

  // SCENARIO 1: Stats fail BEFORE the transaction commits
  it('should propagate error and roll back if a failure occurs inside the transaction boundary', async () => {
    const { prisma } = await import('@/config/db');
    vi.mocked(prisma.quizSession.findUnique).mockResolvedValue(null);
    vi.mocked(prisma.$transaction).mockRejectedValue(new Error('Database transaction failed'));

    await expect(
      quizService.submitQuiz('session-123', 'user-456', [{ questionId: 'q1', answer: 'A' }])
    ).rejects.toThrow('Database transaction failed');
  });

  // SCENARIO 2: Stats fail AFTER the transaction commits
  it('should return success even if the optional post-commit derived stats refresh fails', async () => {
    const { prisma } = await import('@/config/db');
    const mockSession = { id: 'session-123', userId: 'user-456', completedAt: new Date() };
    
    vi.mocked(prisma.quizSession.findUnique).mockResolvedValue(null);
    vi.mocked(prisma.$transaction).mockResolvedValue(mockSession);
    
    const statsSpy = vi.spyOn(QuizServices, 'updateUserStats').mockRejectedValue(new Error('Stats microservice offline'));

    const result = await quizService.submitQuiz('session-123', 'user-456', [{ questionId: 'q1', answer: 'A' }]);

    expect(result.alreadySubmitted).toBe(false);
    expect(result.session).toEqual(mockSession);
    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    
    statsSpy.mockRestore();
  });

  // SCENARIO 3: Idempotent retry of an already completed session
  it('should return the existing record gracefully without triggering a new transaction or throwing 409', async () => {
    const { prisma } = await import('@/config/db');
    const historicalSession = { id: 'session-123', userId: 'user-456', completedAt: new Date() };
    vi.mocked(prisma.quizSession.findUnique).mockResolvedValue(historicalSession as any);

    const result = await quizService.submitQuiz('session-123', 'user-456', [{ questionId: 'q1', answer: 'A' }]);

    expect(result.alreadySubmitted).toBe(true);
    expect(result.session).toEqual(historicalSession);
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  // SCENARIO 4: Happy path
  it('should successfully complete an entire submission when no components fail', async () => {
    const { prisma } = await import('@/config/db');
    const mockSession = { id: 'session-123', userId: 'user-456', completedAt: new Date() };
    
    vi.mocked(prisma.quizSession.findUnique).mockResolvedValue(null);
    vi.mocked(prisma.$transaction).mockResolvedValue(mockSession);
    const statsSpy = vi.spyOn(QuizServices, 'updateUserStats').mockResolvedValue({ success: true });

    const result = await quizService.submitQuiz('session-123', 'user-456', [{ questionId: 'q1', answer: 'A' }]);

    expect(result.alreadySubmitted).toBe(false);
    expect(result.session).toEqual(mockSession);
    
    statsSpy.mockRestore();
  });
});