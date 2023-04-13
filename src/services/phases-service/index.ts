import userRepository from "@/repositories/users-repository";

export async function phaseAuthorization(userId: number, phaseId: number){
  if (phaseId<0||isNaN(phaseId)){
    throw 401
  }

  const user = await userRepository.findUserById(userId)

  console.log(userId, phaseId)
  
  if (user.phase < phaseId) {
    throw 401
  }

  return user
}

const phasesService = {
    phaseAuthorization
}

export default phasesService