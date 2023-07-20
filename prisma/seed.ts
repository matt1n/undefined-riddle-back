import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";

const prisma = new PrismaClient();
const redis = createClient({
   url: process.env.REDIS_URL,
});

async function main() {
   await redis.connect();
    
    let answer = await prisma.answers.findFirst();
    const answersSeed = [{
      "id": 1,
      "answer": "batata"
   },
   {
      "id": 2,
      "answer": "roma"
   },
   {
      "id": 3,
      "answer": "samuel"
   },
   {
      "id": 4,
      "answer": "pirilampo"
   },
   {
      "id": 5,
      "answer": "erinias"
   },
   {
      "id": 6,
      "answer": "leonardo"
   }
   ]

    if(answer){
      redis.set("answers", JSON.stringify(answersSeed))
    } else {
        await prisma.answers.createMany({
            data: answersSeed
        })
    }
}

main()
.catch((e)=> {
    console.error(e);
    process.exit(1);
})
.finally(async ()=> {
    await prisma.$disconnect();
    await redis.disconnect();
})