"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = __importDefault(require("../controllers/CompanyController"));
const companyRouter = express_1.Router();
const companyController = new CompanyController_1.default();
companyRouter.post("/", companyController.create);
exports.default = companyRouter;
