import { endPhaseAuthorization, phaseAuthorization } from "@/controllers/phases-controllers";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { Router } from "express";

const phaseRouter = Router()

phaseRouter
.all("/*", authenticateToken)
.get("/:phaseId", phaseAuthorization)
.get("/end/:phaseId", endPhaseAuthorization)

export {phaseRouter}