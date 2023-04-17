import answerRepository from "@/repositories/awnsers-repository";
import userRepository from "@/repositories/users-repository";

export async function answerCheck(phaseNumber: number, answer: string, userId: number) {
  const user = await userRepository.findUserById(userId)
  if (!user) {
    throw 401
  }
  if (phaseNumber>user.phase) {
    throw 401
  }
  
  const correct = await answerRepository.answerCheck(answer, phaseNumber+1)

  if (!correct) {
    return false
  }

  if (user.phase===phaseNumber){
    await userRepository.phasePass(userId, phaseNumber)
  }

  return true
}

const answerService = {
    answerCheck
}

export default answerService