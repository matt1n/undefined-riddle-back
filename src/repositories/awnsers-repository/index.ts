import { prisma, redis } from "../../config";
import { Prisma } from "@prisma/client";

async function answerCheck(answer: string, id: number){
    
    const redisAnswers = JSON.parse(await redis.get("answers"))
    if (redisAnswers) {
        return redisAnswers[id-1].answer === answer;
    } else {
        const prismaAnswers = await prisma.answers.findFirst({
        where: {
            id, 
            answer
        }
    })
        return prismaAnswers
    }
}

const answerRepository = {
    answerCheck
}

export default answerRepository