import AnalyticsRepository from './analytics.repository';
import type { StreakData, ActivityDay } from './analytics.types';

export default class AnalyticsService {
  static async analytics(userId: string) {
    const [overview, streakData] = await Promise.all([
      AnalyticsRepository.getOverview(userId),
      AnalyticsService.getStreakData(userId),
    ]);

    const { user, sessionCount, sessions } = overview;
    const totalAttempts = sessionCount;
    let totalAccuracy = 0;

    for (const session of sessions) {
      totalAccuracy += session.accuracy;
    }

    const accuracy =
      totalAttempts > 0
        ? Math.round((totalAccuracy / totalAttempts) * 10) / 10
        : 0;

    return {
      totalAttempts,
      accuracy,
      currentStreak: streakData.currentStreak,
      lastActivity: streakData.lastActivityDate,
    };
  }

  static async getStreakData(userId: string): Promise<StreakData> {
    const oneYearAgo = new Date();
    oneYearAgo.setDate(oneYearAgo.getDate() - 364);
    oneYearAgo.setHours(0, 0, 0, 0);

    const sessions = await AnalyticsRepository.getCompletedSessionDates(
      userId,
      oneYearAgo
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activityByDate = new Map<string, number>();

    for (const s of sessions) {
      if (!s.completedAt) continue;
      const d = new Date(s.completedAt);
      d.setHours(0, 0, 0, 0);
      const key = dateToKey(d);
      activityByDate.set(key, (activityByDate.get(key) ?? 0) + 1);
    }

    const activeDates = [...activityByDate.keys()].sort().reverse();
    const todayKey = dateToKey(today);

    const todayActive = activeDates[0] === todayKey;

    let currentStreak = 0;
    const cursor = new Date(today);

    if (!todayActive) {
      cursor.setDate(cursor.getDate() - 1);
    }

    while (activityByDate.has(dateToKey(cursor))) {
      currentStreak++;
      cursor.setDate(cursor.getDate() - 1);
    }

    const totalActiveDays = await AnalyticsRepository.countActiveDays(userId);

    let longestStreak = 0;
    let tempStreak = 0;
    const sortedAsc = [...activityByDate.keys()].sort();

    for (let i = 0; i < sortedAsc.length; i++) {
      if (i === 0) {
        tempStreak = 1;
      } else {
        const prev = sortedAsc[i - 1];
        const curr = sortedAsc[i];
        const prevParts = prev.split('-').map(Number);
        const currParts = curr.split('-').map(Number);
        const expected = new Date(prevParts[0], prevParts[1] - 1, prevParts[2] + 1);
        const expectedKey = dateToKey(expected);

        if (curr === expectedKey) {
          tempStreak++;
        } else {
          tempStreak = 1;
        }
      }

      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
      }
    }

    const calendar: ActivityDay[] = [];

    for (let i = 0; i < 365; i++) {
      const d = new Date(oneYearAgo);
      d.setDate(d.getDate() + i);
      const key = dateToKey(d);
      const count = activityByDate.get(key) ?? 0;
      calendar.push({
        date: key,
        count,
        level: countToLevel(count),
      });
    }

    return {
      currentStreak,
      longestStreak,
      totalActiveDays,
      lastActivityDate: activeDates[0] ?? null,
      todayActive,
      calendar,
    };
  }
}

function dateToKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function countToLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}
