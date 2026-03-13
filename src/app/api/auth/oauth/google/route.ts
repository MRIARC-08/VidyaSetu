import { AuthControllers } from "@/modules/auth/auth.controller"

export async function GET(req: Request) {
  return AuthControllers.googleLogin(req)
}
