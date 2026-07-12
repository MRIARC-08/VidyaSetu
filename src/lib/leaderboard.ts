import authFetch from '@/lib/auth/authFetch';

export type LeaderboardEntry = {
  rank: number;
  userId: string;
  name: string;
  avatar?: string;
  score: number;
  totalCorrect: number;
  totalQuestions: number;
  sessionsCompleted: number;
};

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const res = await authFetch({
    url: '/api/quiz/leaderboard',
    options: { method: 'GET' },
  });

  if (res.message && !res.data) {
    throw new Error(res.message || 'Failed to load leaderboard');
  }

  return res.data as LeaderboardEntry[];
}
