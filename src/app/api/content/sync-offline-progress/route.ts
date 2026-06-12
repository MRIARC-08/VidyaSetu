import { NextResponse } from 'next/server';
import { SetCookies } from '@/lib/auth/cookies';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const syncProgressSchema = z.object({
  offlineProgress: z.array(
    z.object({
      quizSessionId: z.string().uuid().optional(),
      chapterId: z.string().uuid(),
      completedTopics: z.array(z.string().uuid()),
      questionsAnswered: z.number().min(0),
      correctAnswers: z.number().min(0),
      timestamp: z.string().datetime(),
    })
  ),
});

async function getAuthenticatedUserId(): Promise<string | null> {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

export async function POST(req: Request) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { offlineProgress } = syncProgressSchema.parse(body);

    if (offlineProgress.length === 0) {
      return NextResponse.json(
        {
          success: true,
          message: 'No offline progress to sync',
          data: { syncedCount: 0 },
        },
        { status: 200 }
      );
    }

    const syncResults = [];

    for (const progress of offlineProgress) {
      const accuracy =
        progress.questionsAnswered > 0
          ? Math.round((progress.correctAnswers / progress.questionsAnswered) * 100 * 100) / 100
          : 0;

      if (progress.quizSessionId) {
        const session = await prisma.quizSession.findUnique({
          where: { id: progress.quizSessionId },
        });

        if (session && !session.completedAt) {
          const updated = await prisma.quizSession.update({
            where: { id: progress.quizSessionId },
            data: {
              accuracy,
              completedAt: new Date(progress.timestamp),
            },
          });

          syncResults.push({
            type: 'quiz_session',
            sessionId: progress.quizSessionId,
            status: 'synced',
            accuracy,
          });
        }
      } else {
        syncResults.push({
          type: 'chapter_progress',
          chapterId: progress.chapterId,
          status: 'recorded',
          completedTopics: progress.completedTopics.length,
          accuracy,
        });
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Offline progress synced successfully',
        data: {
          syncedCount: syncResults.length,
          results: syncResults,
          nextSteps: 'Your progress has been saved. Continue learning!',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid request', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('[ERROR] Offline progress sync error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
