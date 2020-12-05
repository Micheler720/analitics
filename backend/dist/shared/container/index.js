"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CompanyRepository_1 = __importDefault(require("@modules/company/infra/typeorm/repositories/CompanyRepository"));
tsyringe_1.container.registerSingleton("CompanyRepository", CompanyRepository_1.default);
