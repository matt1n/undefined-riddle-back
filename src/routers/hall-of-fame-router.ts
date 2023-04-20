import { getNames, postName } from "../controllers/hall-of-fame-controllers";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateBody } from "../middlewares/validation-middleware";
import { hallSchema } from "../schemas/hall-of-fame-schemas";
import { Router } from "express";

const hallRouter = Router()

hallRouter
.all("/*", authenticateToken)
.get("/", getNames)
.post("/eternize", validateBody(hallSchema), postName);

export {hallRouter}