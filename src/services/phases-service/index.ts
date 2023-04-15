import userRepository from "@/repositories/users-repository";

export async function phaseAuthorization(userId: number, phaseId: number){
  if (phaseId<0||isNaN(phaseId)){
    return false
  }

  console.log(userId)

  const user = await userRepository.findUserById(userId)

  console.log(userId, phaseId)
  
  if (user.phase < phaseId) {
    return false
  }

  return true
}

const phasesService = {
    phaseAuthorization
}

export default phasesService