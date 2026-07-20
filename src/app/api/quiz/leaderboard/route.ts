import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const stats = await prisma.userStats.findMany({
      where: { totalSessions: { gte: 1 } },
      orderBy: [{ overallAccuracy: 'desc' }, { totalQuestions: 'desc' }],
      take: 10,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    const leaderboard = stats.map((stat, index) => ({
      rank: index + 1,
      userId: stat.userId,
      name: stat.user.name || 'Anonymous',
      avatar: stat.user.image || undefined,
      score: Math.round(stat.overallAccuracy),
      totalCorrect: stat.totalCorrect,
      totalQuestions: stat.totalQuestions,
      sessionsCompleted: stat.totalSessions,
    }));

    return NextResponse.json({ data: leaderboard });
  } catch (error) {
    console.error('Leaderboard fetch error:', error);
    return NextResponse.json(
      { message: 'Failed to load leaderboard' },
      { status: 500 }
    );
  }
}
