import { QuizControllers } from '@/modules/quiz/quiz.controller';

export async function GET(req: Request) {
  return QuizControllers.getSession(req);
}
