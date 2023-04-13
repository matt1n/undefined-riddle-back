import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import phasesService from "@/services/phases-service";
import { Response } from "express";

export async function phaseAuthorization(req: AuthenticatedRequest,res: Response){
  const {userId} = req
  const {phaseId} = req.params
  try {
    const authorized = await phasesService.phaseAuthorization(userId, Number(phaseId))
    res.send(authorized)
  } catch (error) {
    res.sendStatus(error)
  }
}