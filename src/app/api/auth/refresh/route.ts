import { AuthControllers } from '@/modules/auth/auth.controller';

export async function GET() {
  return AuthControllers.refresh();
}
