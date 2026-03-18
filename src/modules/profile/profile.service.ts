import { jwtService } from '@/lib/auth/jwt';
import { ProfileRepository } from './profile.repository';
import { SetCookies } from '@/lib/auth/cookies';

export class ProfileService {
  static async getProfile(userId: string) {
    
    return await ProfileRepository.getProfile(userId);
  }

  static async updateProfile(data: {
    name: string;
    age: string;
    userId: string;
    class: string;
    image: string;
  }) {
    return await ProfileRepository.updateProfile(data);
  }

  static async getUser(userId: string) {
    return await ProfileRepository.getUser(userId);
  }
}
