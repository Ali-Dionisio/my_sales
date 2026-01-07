import { Router } from "express";
import SessionControllers from "../controllers/SessionsControllers";
import { sessionSchema } from "../schemas/SessionSchema";

const sessionsRouter = Router();
const SessionsController = new SessionControllers();

sessionsRouter.post("/", sessionSchema, SessionsController.create);

export default sessionsRouter;
