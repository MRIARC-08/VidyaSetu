import UserController from '@/modules/user/user.controller';

export async function GET(req: Request) {
  return UserController.getUser(req);
}
