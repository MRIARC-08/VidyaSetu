import { NextResponse } from "next/server"
import { ProfileRepository } from "./profile.repository"
import { SetCookies } from "@/lib/auth/cookies"


export class ProfileController {

    static async getProfile (req:Request){


        try {
            const access_token = await SetCookies.verifyCookies()
            
           
    
            const profile = await ProfileRepository.getProfile(access_token!.sub)
    
           return NextResponse.json({profile}, {status: 200})
        } catch (error: any) {
            return NextResponse.json({message : error.message}, {status: 401})
        }
        
    }
    
}