import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
    let answer = await prisma.answers.findFirst();

    if(!answer){
        await prisma.answers.createMany({
            data: [{
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
})