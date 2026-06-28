import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtService } from '@/lib/auth/jwt';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    let payload;
    try {
      payload = jwtService.verifyAccessToken(accessToken.value);
    } catch {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const userId = payload.sub;
    const body = await req.json();
    const { sessionId, responses, timeTaken } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = await prisma.quizSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    if (session.userId !== userId) {
      return NextResponse.json(
        { error: 'You are not authorized to submit scores for this session' },
        { status: 403 }
      );
    }

    if (session.completedAt) {
      return NextResponse.json(
        { error: 'Session already completed' },
        { status: 409 }
      );
    }

    let correctCount = 0;
    if (responses && Array.isArray(responses)) {
      for (const response of responses) {
        if (response.selectedOptionId) {
          const option = await prisma.option.findUnique({
            where: { id: response.selectedOptionId },
          });
          if (option?.isCorrect) {
            correctCount++;
          }
        }
      }
    }

    const accuracy =
      session.totalQuestions > 0
        ? (correctCount / session.totalQuestions) * 100
        : 0;

    const updatedSession = await prisma.quizSession.update({
      where: { id: sessionId },
      data: {
        correctCount,
        accuracy,
        timeTaken: timeTaken ?? session.timeTaken,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      message: 'Score submitted successfully',
      session: updatedSession,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
