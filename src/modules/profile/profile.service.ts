import { ProfileRepository } from "./profile.repository";

export class ProfileService {
    static async getProfile (userId : string){
        return await ProfileRepository.getProfile(userId);
    }

    static async updateProfile(data:{
        name: string
        age: string
        userId: string
        class : string
        image: string 
    }){
        return await ProfileRepository.updateProfile(data)
    }
}