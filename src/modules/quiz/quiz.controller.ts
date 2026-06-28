import { NextResponse } from 'next/server';
import { CreateQuizSchema, SubmitQuizSchema } from './quiz.types';
import { validateRequest } from './quiz.validator';
import { QuizService } from './quiz.service';

export class QuizController {
  static async create(req: Request) {
    try {
      const body = await req.json();
      const validation = validateRequest(CreateQuizSchema, body);
      if (validation.error) return validation.error;

      const userId = req.headers.get('x-user-id') || 'anonymous';
      const quiz = await QuizService.createQuiz(userId, validation.data!);
      return NextResponse.json({ quiz }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }

  static async start(req: Request) {
    try {
      const body = await req.json();
      const { quizId } = body as { quizId?: string };
      if (!quizId || typeof quizId !== 'string') {
        return NextResponse.json({ error: 'quizId is required' }, { status: 400 });
      }

      const userId = req.headers.get('x-user-id') || 'anonymous';
      const session = await QuizService.startSession(userId, quizId);
      return NextResponse.json({ session }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }

  static async getSession(req: Request) {
    try {
      const { searchParams } = new URL(req.url);
      const sessionId = searchParams.get('sessionId');
      if (!sessionId) {
        return NextResponse.json({ error: 'sessionId query param is required' }, { status: 400 });
      }

      const session = await QuizService.getSession(sessionId);
      return NextResponse.json({ session }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
  }

  static async submit(req: Request) {
    try {
      const body = await req.json();
      const validation = validateRequest(SubmitQuizSchema, body);
      if (validation.error) return validation.error;

      const userId = req.headers.get('x-user-id') || 'anonymous';
      const result = await QuizService.submitQuiz(userId, validation.data!);
      return NextResponse.json({ session: result }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
}
