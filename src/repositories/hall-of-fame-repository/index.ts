import { prisma } from "../../config";
import { Prisma } from "@prisma/client";

async function createName(name: string, userId: number){
    return prisma.hall_of_fame.create({
        data: {
            name,
            userId
        }
    })
}

async function findNames(){
    return prisma.hall_of_fame.findMany()
}

async function findNameById(userId: number){
    return prisma.hall_of_fame.findFirst({
        where: {
            userId
        }
    })
}

const hallRespository = {
    createName,
    findNames,
    findNameById
}

export default hallRespository