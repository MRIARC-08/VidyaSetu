import { ProfileController } from '@/modules/profile/profile.controller';

export async function GET(req: Request) {
  return ProfileController.getUser(req);
}
