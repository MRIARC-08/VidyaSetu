import { QuizControllers } from '@/modules/quiz/quiz.controller';

export async function POST(req: Request) {
  return QuizControllers.create(req);
}
