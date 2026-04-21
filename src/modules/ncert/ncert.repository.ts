import { prisma } from "@/lib/prisma";

export class NcertRepository {
    static async getSubjects(grade: number){
        return await prisma.academicClass.findUnique({
            where: {
                level : grade
            },
            include: {
                subjects: true
            }
        })
    }


    static async getChapters(subjectId: string){
        return await prisma.subject.findUnique({
            where:{
                id : subjectId
            },
            include:{
                chapters: true
            }
        })
    }
}
