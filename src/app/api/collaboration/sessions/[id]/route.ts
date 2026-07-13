import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function PATCH(req: Request) {
  return CollaborationControllers.updateSession(req);
}
