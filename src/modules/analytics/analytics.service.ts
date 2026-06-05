import AnalyticsRepository from './analytics.repository';
import {
  WeakTopicAnalyticsError,
  type WeakTopicsResponse,
} from './analytics.types';
import type { z } from 'zod';
import type { weakTopicsQuerySchema } from './analytics.validator';

type WeakTopicsParams = z.infer<typeof weakTopicsQuerySchema>;

export default class AnalyticsService {
  static async analytics(userId: string) {
    const { user, sessionCount, sessions } =
      await AnalyticsRepository.getOverview(userId);

    const totalAttempts = sessionCount;
    let totalAccuracy = 0;
    for (const session of sessions) {
      totalAccuracy += session.accuracy;
    }
    const accuracy =
      totalAttempts > 0
        ? Math.round((totalAccuracy / totalAttempts) * 10) / 10
        : 0;
    const currentStreak = user?.streakCount ?? 0;
    const lastActivity = user?.lastActiveDate?.toISOString() ?? null;

    return { totalAttempts, accuracy, currentStreak, lastActivity };
  }

  static async getWeakTopics(
    userId: string,
    params: WeakTopicsParams
  ): Promise<WeakTopicsResponse> {
    let fromDate: Date | undefined;
    let toDate: Date | undefined;

    if (params.from) {
      fromDate = new Date(params.from);
      if (isNaN(fromDate.getTime())) {
        throw new WeakTopicAnalyticsError('Invalid from date format', 400);
      }
    }
    if (params.to) {
      toDate = new Date(params.to);
      if (isNaN(toDate.getTime())) {
        throw new WeakTopicAnalyticsError('Invalid to date format', 400);
      }
    }

    const sessions = await AnalyticsRepository.getCompletedSessionsWithTopics(
      userId,
      fromDate,
      toDate
    );

    const topicMap = new Map<
      string,
      {
        topicId: string;
        topicName: string;
        attempts: number;
        correctAnswers: number;
      }
    >();

    for (const session of sessions) {
      for (const response of session.responses) {
        const topic = response.question?.topic;
        if (!topic) continue;

        const existing = topicMap.get(topic.id);
        if (!existing) {
          topicMap.set(topic.id, {
            topicId: topic.id,
            topicName: topic.title,
            attempts: 0,
            correctAnswers: 0,
          });
        }

        const entry = topicMap.get(topic.id)!;
        entry.attempts++;

        if (response.isCorrect === true) {
          entry.correctAnswers++;
        } else if (response.score !== null && response.score !== undefined) {
          entry.correctAnswers += response.score / 100;
        }
      }
    }

    const topics = Array.from(topicMap.values())
      .map((t) => ({
        topicName: t.topicName,
        topicId: t.topicId,
        accuracy: Math.round((t.correctAnswers / t.attempts) * 1000) / 10,
        attempts: t.attempts,
        correctAnswers: Math.round(t.correctAnswers),
      }))
      .filter((t) => t.accuracy < 60);

    if (params.sortBy === 'attempts') {
      topics.sort((a, b) => b.attempts - a.attempts);
    } else {
      topics.sort((a, b) => a.accuracy - b.accuracy);
    }

    const total = topics.length;
    const totalPages = Math.ceil(total / params.limit);
    const start = (params.page - 1) * params.limit;
    const paginatedTopics = topics.slice(start, start + params.limit);

    return {
      topics: paginatedTopics,
      pagination: {
        page: params.page,
        limit: params.limit,
        total,
        totalPages,
      },
    };
  }
}
