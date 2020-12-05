import { Router } from "express";
import "reflect-metadata";
import companyRouter from "@modules/company/infra/http/routes/company.routes";
import "@shared/container/index";

const routes = Router();

routes.use("/companies", companyRouter);

export default routes;
