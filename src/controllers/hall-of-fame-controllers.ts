import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import hallService from "../services/hall-of-fame-service";
import { Response } from "express";

export async function postName(req: AuthenticatedRequest, res: Response) {
  const { name } = req.body
  const { userId } = req
  try {
    const response = await hallService.nameCreate(name, Number(userId))
    res.status(200).send(response)
  } catch (error) {
    res.status(error.status).send(error.message)
  }
}

export async function getNames(req: AuthenticatedRequest, res: Response) {
  const {userId} = req
  try {
    const response = await hallService.findNames(userId)
    res.status(200).send(response)
  } catch (error) {
    res.sendStatus(error)
  }
}