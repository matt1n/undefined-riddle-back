import { prisma } from "../../config";
import { Prisma } from "@prisma/client";

async function answerCheck(answer: string, id: number){
    return prisma.answers.findFirst({
        where: {
            id, 
            answer
        }
    })
}

const answerRepository = {
    answerCheck
}

export default answerRepository