import { Router } from "express";
import "reflect-metadata";
import companyRouter from "@modules/companies/infra/http/routes/companies.routes";
import userRouter from "@modules/users/infra/http/routes/users.routes";
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import "@shared/container/index";

const routes = Router();

routes.use("/companies", companyRouter);
routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);

export default routes;
