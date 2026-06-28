import { NextResponse } from 'next/server';
import { GenerateQuestionsRequestSchema } from './ai.types';
import { AIService } from './ai.service';

export class AIController {
  static async generateQuestions(req: Request) {
    try {
      const body = await req.json();
      const parsed = GenerateQuestionsRequestSchema.safeParse(body);

      if (!parsed.success) {
        return NextResponse.json(
          { error: 'Validation failed', details: parsed.error.issues },
          { status: 400 },
        );
      }

      const questions = await AIService.generateQuestions(parsed.data);
      return NextResponse.json({ questions }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
