import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { withAuth, type AuthContext } from '@/lib/middleware/auth.middleware';
import UserServices from './user.service';

const handleError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { message: 'Invalid request', errors: error.issues },
      { status: 400 }
    );
  }
  const message =
    error instanceof Error ? error.message : 'Internal server error';
  return NextResponse.json({ message }, { status: 500 });
};

class UserController {
  static getUser = withAuth(async (_req: Request, auth: AuthContext) => {
    try {
      const user = await UserServices.getUser(auth.userId);
      return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  });

  static updateUser = withAuth(async (req: Request, auth: AuthContext) => {
    try {
      const body = await req.json();
      const res = await UserServices.updateUser(auth.userId, body);
      return NextResponse.json({ message: res }, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  });
}

export default UserController;
export { UserController };
