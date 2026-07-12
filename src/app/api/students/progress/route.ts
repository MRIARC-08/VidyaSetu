import { SetCookies } from '@/lib/auth/cookies';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const token = await SetCookies.verifyCookies();

    if (!token?.sub) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const studentId = url.searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json(
        { message: 'studentId query parameter is required' },
        { status: 400 }
      );
    }

    if (token.sub !== studentId) {
      return NextResponse.json(
        { message: 'Access denied: You can only view your own progress' },
        { status: 403 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: studentId },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Student not found' },
        { status: 404 }
      );
    }

    const userStats = await prisma.userStats.findUnique({
      where: { userId: studentId },
    });

    const quizSessions = await prisma.quizSession.findMany({
      where: { userId: studentId, completedAt: { not: null } },
      select: {
        id: true,
        totalQuestions: true,
        correctCount: true,
        accuracy: true,
        timeTaken: true,
        completedAt: true,
        quiz: {
          select: {
            source: true,
            mode: true,
          },
        },
      },
      orderBy: { completedAt: 'desc' },
      take: 50,
    });

    const completedChapters = await prisma.chapter.findMany({
      where: {
        bookmarks: {
          some: {
            userId: studentId,
          },
        },
      },
      select: {
        id: true,
        title: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          student: user,
          stats: {
            totalSessions: userStats?.totalSessions ?? 0,
            totalQuestions: userStats?.totalQuestions ?? 0,
            totalCorrect: userStats?.totalCorrect ?? 0,
            overallAccuracy: userStats?.overallAccuracy ?? 0,
            currentStreak: userStats?.currentStreak ?? 0,
            longestStreak: userStats?.longestStreak ?? 0,
          },
          recentSessions: quizSessions,
          completedChapters,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching student progress:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
