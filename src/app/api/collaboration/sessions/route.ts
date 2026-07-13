import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function GET(req: Request) {
  return CollaborationControllers.listSessions(req);
}

export async function POST(req: Request) {
  return CollaborationControllers.createSession(req);
}
