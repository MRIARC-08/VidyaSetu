import { AuthControllers } from '@/modules/auth/auth.controller';

export async function POST(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  return AuthControllers.resetPassword(req, token);
}
