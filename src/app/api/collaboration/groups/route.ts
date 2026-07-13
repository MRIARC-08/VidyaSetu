import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function GET(req: Request) {
  return CollaborationControllers.listGroups(req);
}

export async function POST(req: Request) {
  return CollaborationControllers.createGroup(req);
}
