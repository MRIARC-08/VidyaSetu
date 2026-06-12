import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SetCookies } from '@/lib/auth/cookies';

async function getAuthenticatedUserId(): Promise<string | null> {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const authenticatedUserId = await getAuthenticatedUserId();

    if (!authenticatedUserId) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    const requestedStudentId = params.id;

    if (authenticatedUserId !== requestedStudentId) {
      console.warn(
        `[SECURITY] Unauthorized access attempt: User ${authenticatedUserId} tried to access progress for student ${requestedStudentId}`
      );
      return NextResponse.json(
        { message: 'Not found' },
        { status: 404 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: requestedStudentId },
      select: {
        id: true,
        name: true,
        email: true,
        class: true,
        createdAt: true,
        stats: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Student not found' },
        { status: 404 }
      );
    }

    const quizSessions = await prisma.quizSession.findMany({
      where: { userId: requestedStudentId },
      include: {
        quiz: {
          select: {
            mode: true,
            source: true,
            chapterId: true,
            topicId: true,
          },
        },
      },
      orderBy: { completedAt: 'desc' },
    });

    const completedChapters = await prisma.quiz.findMany({
      where: {
        userId: requestedStudentId,
        chapterId: { not: null },
      },
      distinct: ['chapterId'],
      select: { chapterId: true },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          student: {
            id: user.id,
            name: user.name,
            email: user.email,
            class: user.class,
            joinedAt: user.createdAt,
          },
          stats: user.stats || {
            totalSessions: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            overallAccuracy: 0,
            easyAccuracy: 0,
            mediumAccuracy: 0,
            hardAccuracy: 0,
            currentStreak: 0,
            longestStreak: 0,
          },
          quizHistory: quizSessions.map((session) => ({
            id: session.id,
            mode: session.quiz.mode,
            source: session.quiz.source,
            totalQuestions: session.totalQuestions,
            correctCount: session.correctCount,
            accuracy: session.accuracy,
            timeTaken: session.timeTaken,
            completedAt: session.completedAt,
            startedAt: session.startedAt,
          })),
          completedChaptersCount: completedChapters.length,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[ERROR] Failed to fetch student progress:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
