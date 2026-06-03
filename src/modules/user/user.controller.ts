import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import UserServices from './user.service';

export default class UserController {
  static async getUser(req: Request) {
    try {
      const user = await UserServices.getUser();
      return NextResponse.json({ user }, { status: 200 });
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        return NextResponse.json(
          { message: 'Invalid request', errors: error.issues },
          { status: 400 }
        );
      }

      const message =
        error instanceof Error ? error.message : 'Internal server error';

      return NextResponse.json({ message }, { status: 500 });
    }
  }

  static async updateUser(req: Request) {
    try {
      const body = await req.json();

      const res = await UserServices.updateUser(body);
      return NextResponse.json({ message: res }, { status: 200 });
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        return NextResponse.json(
          { message: 'Invalid request body', errors: error.issues },
          { status: 400 }
        );
      }

      const message =
        error instanceof Error ? error.message : 'Internal server error';

      return NextResponse.json({ message }, { status: 500 });
    }
  }
}
