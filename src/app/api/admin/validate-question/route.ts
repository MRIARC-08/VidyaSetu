import { NextResponse } from 'next/server';
import { SetCookies } from '@/lib/auth/cookies';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const validateQuestionSchema = z.object({
  questionId: z.string().uuid(),
});

type ValidationRule = {
  name: string;
  message: string;
  passed: boolean;
};

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
    const { questionId } = validateQuestionSchema.parse(body);

    const question = await prisma.question.findUnique({
      where: { id: questionId },
      include: { options: true },
    });

    if (!question) {
      return NextResponse.json(
        { message: 'Question not found' },
        { status: 404 }
      );
    }

    const validationRules: ValidationRule[] = [];

    validationRules.push({
      name: 'Question Length',
      message: 'Question text should be at least 10 characters',
      passed: question.questionText.length >= 10,
    });

    validationRules.push({
      name: 'Question Clarity',
      message: 'Question should not be excessively long (max 500 characters)',
      passed: question.questionText.length <= 500,
    });

    validationRules.push({
      name: 'Has Explanation',
      message: 'Question should have an explanation',
      passed: question.explanation !== null && question.explanation.length > 0,
    });

    validationRules.push({
      name: 'Has Options',
      message: 'Question must have at least 2 options',
      passed: question.options.length >= 2,
    });

    validationRules.push({
      name: 'Has Correct Answer',
      message: 'Question must have at least one correct answer',
      passed: question.options.some((opt) => opt.isCorrect),
    });

    if (question.type === 'MCQ') {
      const correctCount = question.options.filter((opt) => opt.isCorrect).length;
      validationRules.push({
        name: 'Multiple Correct Answers',
        message: `MCQ has ${correctCount} correct answer(s). Consider if all are necessary.`,
        passed: correctCount === 1,
      });
    }

    validationRules.push({
      name: 'Option Labels Quality',
      message: 'All options should have meaningful labels',
      passed: question.options.every((opt) => opt.label.length >= 3),
    });

    validationRules.push({
      name: 'Option Values Quality',
      message: 'All options should have meaningful values',
      passed: question.options.every((opt) => opt.value.length >= 1),
    });

    const passedCount = validationRules.filter((r) => r.passed).length;
    const totalRules = validationRules.length;
    const qualityScore = Math.round((passedCount / totalRules) * 100);

    const failedRules = validationRules.filter((r) => !r.passed);

    return NextResponse.json(
      {
        success: true,
        data: {
          questionId,
          questionType: question.type,
          qualityScore,
          validationRules,
          failedRules,
          recommendation:
            qualityScore >= 80
              ? 'Question meets quality standards'
              : 'Question needs improvement before use',
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

    console.error('[ERROR] Question validation error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
