import UserController from '@/modules/user/user.controller';

export async function POST(req: Request) {
  return UserController.updateUser(req);
}
