import { NextResponse } from 'next/server';
import { ProfileRepository } from './profile.repository';
import { SetCookies } from '@/lib/auth/cookies';
import { ProfileService } from './profile.service';

export class ProfileController {
  static async getProfile(req: Request) {
    try {
      const access_token = await SetCookies.verifyCookies();

      const profile = await ProfileService.getProfile(access_token!.sub);

      return NextResponse.json({ profile }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
  }

  static async getUser(req: Request) {
    try {
      const access_token = await SetCookies.verifyCookies();

      const user = await ProfileService.getUser(access_token!.sub);

      return NextResponse.json({ user }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
  }
}
