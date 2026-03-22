import { ProfileController } from '@/modules/profile/profile.controller';

export async function PUT(req: Request) {
  return await ProfileController.updateOrCreateProfile(req);
}
