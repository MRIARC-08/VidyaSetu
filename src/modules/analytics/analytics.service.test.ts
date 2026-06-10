import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  userStatsFindUnique: vi.fn(),
  userStatsCreate: vi.fn(),
  userStatsUpdate: vi.fn(),
  chapterProgressFindMany: vi.fn(),
  getOverview7Days: vi.fn(),
}));

vi.mock('@/lib/prisma', () => ({
  prisma: {
    userStats: {
      findUnique: mocks.userStatsFindUnique,
      create: mocks.userStatsCreate,
      update: mocks.userStatsUpdate,
    },
    chapterProgress: {
      findMany: mocks.chapterProgressFindMany,
    },
  },
}));

vi.mock('./analytics.repository', () => ({
  default: {
    getOverview7Days: mocks.getOverview7Days,
  },
}));

import AnalyticsService from './analytics.service';

describe('AnalyticsService.analytics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('aggregates subject progress and recent chapter progress', async () => {
    mocks.getOverview7Days.mockResolvedValue({
      userStats: {
        totalQuestions: 20,
        totalCorrect: 16,
        currentStreak: 3,
        longestStreak: 5,
        lastActivityDate: new Date('2026-06-10T00:00:00.000Z'),
      },
      sessionCount: 2,
      sessions: [],
    });

    mocks.chapterProgressFindMany.mockResolvedValue([
      {
        completion: 100,
        accuracy: 80,
        chapter: { title: 'Real Numbers' },
        subject: { name: 'Maths' },
      },
      {
        completion: 50,
        accuracy: 60,
        chapter: { title: 'Polynomials' },
        subject: { name: 'Maths' },
      },
      {
        completion: 100,
        accuracy: 90,
        chapter: { title: 'Life Processes' },
        subject: { name: 'Science' },
      },
    ]);

    const result = await AnalyticsService.analytics('user-123');

    expect(result.subjects).toEqual([
      { subject: 'Maths', completed: 1, total: 2, percentage: 50 },
      { subject: 'Science', completed: 1, total: 1, percentage: 100 },
    ]);

    expect(result.recentChapters).toEqual([
      { chapter: 'Real Numbers', completed: true, score: 80 },
      { chapter: 'Polynomials', completed: false, score: 60 },
      { chapter: 'Life Processes', completed: true, score: 90 },
    ]);
  });
});

describe('AnalyticsService.updateStatsAndStreak', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes user stats and streak for the first quiz (create path)', async () => {
    mocks.userStatsFindUnique.mockResolvedValue(null);
    mocks.userStatsCreate.mockResolvedValue({
      userId: 'user-123',
      currentStreak: 1,
      longestStreak: 1,
    });

    const result = await AnalyticsService.updateStatsAndStreak('user-123', {
      totalQuestions: 10,
      correctCount: 8,
    });

    expect(mocks.userStatsFindUnique).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
    });
    expect(mocks.userStatsCreate).toHaveBeenCalledWith({
      data: expect.objectContaining({
        userId: 'user-123',
        totalSessions: 1,
        totalQuestions: 10,
        totalCorrect: 8,
        currentStreak: 1,
        longestStreak: 1,
        lastActivityDate: expect.any(Date),
      }),
    });
    expect(result.currentStreak).toBe(1);
    expect(result.longestStreak).toBe(1);
  });

  it('maintains the streak count for multiple completions on the same day (diff = 0)', async () => {
    const today = new Date();
    mocks.userStatsFindUnique.mockResolvedValue({
      userId: 'user-123',
      totalSessions: 1,
      totalQuestions: 10,
      totalCorrect: 8,
      currentStreak: 2,
      longestStreak: 2,
      lastActivityDate: today,
    });

    mocks.userStatsUpdate.mockImplementation(({ data }) =>
      Promise.resolve({
        ...data,
        currentStreak: data.currentStreak,
        longestStreak: data.longestStreak,
      })
    );

    const result = await AnalyticsService.updateStatsAndStreak('user-123', {
      totalQuestions: 5,
      correctCount: 4,
    });

    expect(mocks.userStatsUpdate).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
      data: expect.objectContaining({
        totalSessions: 2,
        totalQuestions: 15,
        totalCorrect: 12,
        currentStreak: 2,
        longestStreak: 2,
        lastActivityDate: expect.any(Date),
      }),
    });
    expect(result.currentStreak).toBe(2);
  });

  it('increments current streak on consecutive days (diff = 1)', async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    mocks.userStatsFindUnique.mockResolvedValue({
      userId: 'user-123',
      totalSessions: 1,
      totalQuestions: 10,
      totalCorrect: 8,
      currentStreak: 2,
      longestStreak: 2,
      lastActivityDate: yesterday,
    });

    mocks.userStatsUpdate.mockImplementation(({ data }) =>
      Promise.resolve({
        ...data,
        currentStreak: data.currentStreak,
        longestStreak: data.longestStreak,
      })
    );

    const result = await AnalyticsService.updateStatsAndStreak('user-123', {
      totalQuestions: 10,
      correctCount: 10,
    });

    expect(mocks.userStatsUpdate).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
      data: expect.objectContaining({
        totalSessions: 2,
        totalQuestions: 20,
        totalCorrect: 18,
        currentStreak: 3,
        longestStreak: 3,
        lastActivityDate: expect.any(Date),
      }),
    });
    expect(result.currentStreak).toBe(3);
  });

  it('resets streak to 1 after a gap of more than one day (diff > 1)', async () => {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    mocks.userStatsFindUnique.mockResolvedValue({
      userId: 'user-123',
      totalSessions: 1,
      totalQuestions: 10,
      totalCorrect: 8,
      currentStreak: 5,
      longestStreak: 5,
      lastActivityDate: threeDaysAgo,
    });

    mocks.userStatsUpdate.mockImplementation(({ data }) =>
      Promise.resolve({
        ...data,
        currentStreak: data.currentStreak,
        longestStreak: data.longestStreak,
      })
    );

    const result = await AnalyticsService.updateStatsAndStreak('user-123', {
      totalQuestions: 10,
      correctCount: 5,
    });

    expect(mocks.userStatsUpdate).toHaveBeenCalledWith({
      where: { userId: 'user-123' },
      data: expect.objectContaining({
        totalSessions: 2,
        totalQuestions: 20,
        totalCorrect: 13,
        currentStreak: 1,
        longestStreak: 5,
        lastActivityDate: expect.any(Date),
      }),
    });
    expect(result.currentStreak).toBe(1);
    expect(result.longestStreak).toBe(5);
  });
});
