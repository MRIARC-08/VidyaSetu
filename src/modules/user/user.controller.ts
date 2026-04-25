import { NextResponse } from 'next/server';
import UserServices from './user.service';

export default class UserController {
  static async getUser(req: Request) {
    try {
      const user = await UserServices.getUser();
      return NextResponse.json({ user }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
  }

  static async updateUser(req: Request) {
    try {
      const body = await req.json();

      const res = await UserServices.updateUser(body);
      return NextResponse.json({ message: res }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
  }
}
