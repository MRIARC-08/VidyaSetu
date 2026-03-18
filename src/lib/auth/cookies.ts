import { cookies } from 'next/headers';
import { jwtService } from './jwt';

export class SetCookies {
  static async setRefreshtoken(refreshToken: string) {
    const cookieStore = await cookies();
    cookieStore.set('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
  }

  static async setAccesstoken(accessToken: string) {
    const cookieStore = await cookies();
    cookieStore.set('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
  }

  static async verifyCookies() {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('access_token');
    if (access_token) {
      return jwtService.verifyAccessToken(access_token.value);
    }
  }

  static async deleteCookies(){
    const cookieStore = await cookies()
    cookieStore.delete('access_token')
    cookieStore.delete('refresh_token')


  }
}
