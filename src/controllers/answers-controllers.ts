import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import answerService from "../services/answers-service";
import {Response } from "express";

export async function answerPost(req: AuthenticatedRequest,res: Response){
  const {userId} = req
  const {answer} = req.body
  const phaseNumber = req.params.phaseNumber
    try {
      const response = await answerService.answerCheck(Number(phaseNumber), answer, userId)
      res.status(200).send(response)
    } catch (error) {
      res.sendStatus(error)
    }
}