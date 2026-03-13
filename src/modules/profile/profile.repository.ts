import { prisma } from "@/lib/prisma";
import { da } from "zod/locales";

export class ProfileRepository {
    static async getProfile(userId: string){
        return await prisma.profile.findUnique({
            where : {
                userId
            }
        })
    }

    static async updateProfile( data : {
        name : string
        userId: string
        age : string
        class : string 
        image : string 

    }){
        return await prisma.profile.create({
            data : {
                name: data.name,
                userId: data.userId,
                age : data.age,
                class : data.class,
                image : data.image,
                profileCompleted : true

            }
        })

    }
    
}