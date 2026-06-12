import { NextResponse } from 'next/server';
import { SetCookies } from '@/lib/auth/cookies';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const createTemplateSchema = z.object({
  questionId: z.string().uuid(),
  acceptedAnswerPatterns: z.array(z.string()).min(1),
  rubric: z.object({
    criteria: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        maxPoints: z.number().min(0).max(10),
      })
    ),
  }).optional(),
  helpfulHints: z.array(z.string()).optional(),
  commonMisconceptions: z.array(z.string()).optional(),
});

async function getAuthenticatedUser(): Promise<{ sub: string; role?: string } | null> {
  const token = await SetCookies.verifyCookies();
  return token ? { sub: token.sub, role: token.role } : null;
}

export async function POST(req: Request) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    if (user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Admin access required' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const validatedData = createTemplateSchema.parse(body);

    const question = await prisma.question.findUnique({
      where: { id: validatedData.questionId },
    });

    if (!question) {
      return NextResponse.json(
        { message: 'Question not found' },
        { status: 404 }
      );
    }

    if (question.type !== 'SUBJECTIVE') {
      return NextResponse.json(
        { message: 'Evaluation template can only be created for subjective questions' },
        { status: 400 }
      );
    }

    const templateData = {
      acceptedAnswerPatterns: validatedData.acceptedAnswerPatterns,
      rubric: validatedData.rubric || null,
      helpfulHints: validatedData.helpfulHints || [],
      commonMisconceptions: validatedData.commonMisconceptions || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Subjective evaluation template created',
        data: {
          questionId: validatedData.questionId,
          template: templateData,
          guidance:
            'This template helps graders evaluate subjective answers consistently. Use these accepted patterns and rubric to grade fairly.',
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid request', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('[ERROR] Template creation error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
