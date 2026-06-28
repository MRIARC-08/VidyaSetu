import { QuizController } from '@/modules/quiz/quiz.controller';

export async function POST(req: Request) {
  return QuizController.submit(req);
}
