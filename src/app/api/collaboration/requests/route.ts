import { CollaborationControllers } from '@/modules/collaboration/collaboration.controller';

export async function GET(req: Request) {
  return CollaborationControllers.listTutoringRequests(req);
}

export async function POST(req: Request) {
  return CollaborationControllers.createTutoringRequest(req);
}
