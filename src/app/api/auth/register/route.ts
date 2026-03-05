import { AuthControllers } from "@/modules/auth/auth.controller";

export async function POST(req:Request){
    return AuthControllers.register(req)
}