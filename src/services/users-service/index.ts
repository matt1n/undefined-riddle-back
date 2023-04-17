import userRepository from "@/repositories/users-repository";
import bcrypt from "bcrypt"
import { users } from "@prisma/client";
import jwt from "jsonwebtoken"
import sessionRepository from "@/repositories/sessions-repository";

export async function signUp({email, password}: usersParams): Promise<users> {
    const unvalidEmail = await userRepository.findUser(email)

    if(unvalidEmail) {
        throw 500
    };

    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await userRepository.create({email, password: hashedPassword})
    
    return user
}

export async function signIn(body: {email: string, password: string}){
  const {email, password} = body;

  const user = await userRepository.findUser(email);

  if (!user) {
    throw 401
  }

  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword) {
    throw 401
  }

  delete user.password

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  await sessionRepository.create({
    token,
    userId: user.id,
  });

  return {user, token}
}

export type usersParams = Pick<users, "email" | "password">;

const usersService = {
  signUp,
    signIn
}

export default usersService