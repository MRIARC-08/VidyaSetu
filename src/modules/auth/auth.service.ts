import { prisma } from "@/lib/prisma"
import { AuthRepository } from "./auth.repository"
import { da } from "zod/locales"
import { email, string } from "zod"
import bcrypt from "bcrypt"
import { jwtService } from "@/lib/jwt"

export class AuthServices {

  static async handleGoogleService (
    data: {
      image: string | null
      name: string | null
      email: string
      providerAccountId: string
    }
  ){

    let user = await AuthRepository.findUserByEmail(data.email)

    if (!user) {
      user = await AuthRepository.createUser( {
        email: data.email,
        name: data.name,
        image: data.image
      })
    }

    await AuthRepository.enasureGoogleAccountLinked(user.id, data.providerAccountId)


    return user;

   

  }

  static async handleRegister(data: {
    email: string
    password: string
  }){
    let user = await AuthRepository.findUserByEmail(data.email)

    if (!user){
      user = await AuthRepository.registerUser({
        email: data.email,
        password: data.password
      })
    }

    return user;

  }

  static async loginUser(data:{
      email: string
      password: string
    }){
      let user = await AuthRepository.findUserByEmail(data.email)
  
      if (!user || !user.password){
        throw new Error("invalid credentials")
      }

      let isMatch = await bcrypt.compare(data.password, user.password)

      if (!isMatch){
        throw new Error("invalid credentials")
      }

      const accessToken =  jwtService.generateAccessToken({id : user.id, role : user.role})

      const refreshToken = await AuthRepository.createRefreshToken(user.id)


      return {
        user,
        accessToken,
        refreshToken
      }
      
  
    }

  static createRefreshToken(userId: string){
    return AuthRepository.createRefreshToken(userId)
  }
      
    
}