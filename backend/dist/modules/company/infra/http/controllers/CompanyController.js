"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCompanyService_1 = __importDefault(require("@modules/company/services/CreateCompanyService"));
const tsyringe_1 = require("tsyringe");
class CompanyController {
    async create(request, response) {
        const createCompany = tsyringe_1.container.resolve(CreateCompanyService_1.default);
        const { name, nameFantasy, cnpj } = request.body;
        const company = await createCompany.execute({
            name,
            nameFantasy,
            cnpj,
        });
        return response.json(company);
    }
}
exports.default = CompanyController;
