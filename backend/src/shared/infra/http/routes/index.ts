import { Router } from "express";
import "reflect-metadata";
import companyRouter from "@modules/companies/infra/http/routes/companies.routes";
import userRouter from "@modules/users/infra/http/routes/users.routes";
import "@shared/container/index";

const routes = Router();

routes.use("/companies", companyRouter);
routes.use("/users", userRouter);

export default routes;
