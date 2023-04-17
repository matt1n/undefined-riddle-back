import hallRespository from "@/repositories/hall-of-fame-repository";
import userRepository from "@/repositories/users-repository";

export async function nameCreate(name: string, userId:number) {
    const nameByUser = await hallRespository.findNameById(userId)
    if (nameByUser) {
        throw {status: 401, message: "Este usuário já está esternizado"}
    }

    return await hallRespository.createName(name, userId)
}

export async function findNames(userId: number){
    const user = await userRepository.findUserById(userId)
    if(!user){
        throw 401
    }
    return await hallRespository.findNames()
}

const hallService = {
    findNames,
    nameCreate
}

export default hallService