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

const userRepository = {
    findUser,
    create
}

export default userRepository;