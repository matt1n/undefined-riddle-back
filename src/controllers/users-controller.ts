import usersService from "@/services/users-service";
import { Request, Response } from "express";

export async function usersPost(req: Request, res: Response) {
  const {email, password} = req.body;
  try {
    const user = await usersService.signUp({email, password});
    return res.status(200).send(user);
  } catch (error) {
    return res.sendStatus(409)
  }
}

export async function signInPost(req: Request, res: Response) {
  const {email, password} = req.body;
  try {
    const user = await usersService.signIn({email, password});
    return res.status(200).send(user);
  } catch (error) {
    return res.sendStatus(error)
  }
}