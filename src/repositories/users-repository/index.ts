import {prisma} from "@/config"
import {Prisma} from "@prisma/client"

async function create(data: Prisma.usersUncheckedCreateInput) {
    return prisma.users.create({
        data
    })
}

async function findUser(email: string) {
    return prisma.users.findFirst({
        where: {
            email
        }
    })
}

async function findUserById(userId: number) {
    return prisma.users.findUnique({
        where: {id: userId}
    })
}

async function phasePass(userId: number, phase: number){
    const newPhase = prisma.users.update({
        where: {
            id: userId
        },
        data: {
            phase: phase+1
        }
    })
    return newPhase
}

const userRepository = {
    findUser,
    create,
    phasePass,
    findUserById
}

export default userRepository;