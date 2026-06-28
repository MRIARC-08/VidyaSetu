import { AIController } from '@/modules/ai/ai.controller';

export async function POST(req: Request) {
  return AIController.generateQuestions(req);
}
