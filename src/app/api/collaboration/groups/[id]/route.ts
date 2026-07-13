import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function GET(req: Request) {
  return CollaborationControllers.getGroup(req);
}

export async function DELETE(req: Request) {
  return CollaborationControllers.leaveGroup(req);
}
