import express, {Express} from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "@/config";
import { answersRouter, phaseRouter, usersRouter } from "./routers";
import { hallRouter } from "./routers/hall-of-fame-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/users", usersRouter)
  .use("/answers", answersRouter)
  .use("/phases", phaseRouter)
  .use("/hall", hallRouter);

export function init(): Promise<Express> {
connectDb();
return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;