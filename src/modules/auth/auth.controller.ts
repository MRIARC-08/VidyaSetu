import { NextResponse } from "next/server"
import { AuthServices } from "./auth.service"
import { SetCookies } from "@/lib/auth/cookies"

export class AuthControllers {

  static async register(req: Request){

    try {

      const body = await req.json()

      const result = await AuthServices.handleRegister(body)

      await SetCookies.setAccesstoken(result.accessToken)
      await SetCookies.setRefreshtoken(result.refreshToken)

      return NextResponse.json({user: result.user}, {status: 201})



    } catch (error: any) {

      return NextResponse.json({error: error.message}, {status: 400})

    } 

  }

  static async login(req: Request){

    const body = await req.json()

    try {
      const result = await AuthServices.HandleloginUser(body)

      await SetCookies.setAccesstoken(result.accessToken)
      await SetCookies.setRefreshtoken(result.refreshToken)

      return NextResponse.json({user: result.user}, {status: 201})
    } catch (error:  any) {
      return NextResponse.json({error: error.message}, {status: 400})
    }
  }



}