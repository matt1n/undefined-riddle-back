import { answerPost } from "../controllers/answers-controllers";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateBody } from "../middlewares/validation-middleware";
import { answerSchema } from "../schemas";
import { Router } from "express";

const answersRouter = Router()

answersRouter
.all("/*", authenticateToken)
.post("/:phaseNumber",validateBody(answerSchema), answerPost)

export{answersRouter}