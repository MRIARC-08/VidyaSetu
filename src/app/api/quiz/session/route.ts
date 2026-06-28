import { QuizController } from '@/modules/quiz/quiz.controller';

export async function GET(req: Request) {
  return QuizController.getSession(req);
}
