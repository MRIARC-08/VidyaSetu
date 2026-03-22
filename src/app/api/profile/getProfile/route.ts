import { ProfileController } from '@/modules/profile/profile.controller';

export async function GET(req: Request) {
  return await ProfileController.getProfile(req);
}
