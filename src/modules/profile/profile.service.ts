import { jwtService } from '@/lib/auth/jwt';
import { ProfileRepository } from './profile.repository';
import { SetCookies } from '@/lib/auth/cookies';

export class ProfileService {
  static async getProfile(userId: string) {
    return await ProfileRepository.getProfile(userId);
  }

  static async updateOrCreateProfile(data: {
    name: string;
    age: string;
    userId: string;
    class: string;
    image: string;
  }) {
    return await ProfileRepository.updateOrCreateProfile(data);
  }

  static async getUser(userId: string) {
    return await ProfileRepository.getUser(userId);
  }
}
