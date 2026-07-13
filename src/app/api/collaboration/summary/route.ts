import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function GET(req: Request) {
  return CollaborationControllers.getSummary(req);
}
