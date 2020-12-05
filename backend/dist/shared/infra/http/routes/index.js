"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
const company_routes_1 = __importDefault(require("@modules/company/infra/http/routes/company.routes"));
require("@shared/container/index");
const routes = express_1.Router();
routes.use("/companies", company_routes_1.default);
exports.default = routes;
