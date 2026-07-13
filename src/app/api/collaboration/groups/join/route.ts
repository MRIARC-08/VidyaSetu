import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function POST(req: Request) {
  return CollaborationControllers.joinGroup(req);
}
