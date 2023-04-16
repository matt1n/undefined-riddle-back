import hallRespository from "@/repositories/hall-of-fame-repository";
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

export async function endPhaseAuthorization(userId: number, phaseId: number){
  const name = await hallRespository.findNameById(userId)

  if (name) {
    return "next"
  }

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
    phaseAuthorization,
    endPhaseAuthorization
}

export default phasesService