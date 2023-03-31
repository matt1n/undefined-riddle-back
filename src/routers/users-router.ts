import { signInPost, usersPost } from "@/controllers/users-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { signInSchema, signUpSchema } from "@/schemas";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/",validateBody(signUpSchema), usersPost);
usersRouter.post("/signin", validateBody(signInSchema), signInPost)

export {usersRouter}