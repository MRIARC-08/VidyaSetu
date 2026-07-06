import { CredentialsController } from '@/modules/credentials';

export async function POST(req: Request) {
  return CredentialsController.store(req);
}

export async function GET(req: Request) {
  return CredentialsController.list(req);
}