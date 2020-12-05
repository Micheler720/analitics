"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Company_1 = __importDefault(require("../entities/Company"));
class CompanyRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Company_1.default);
    }
    async create(data) {
        const company = this.ormRepository.create({
            cnpj: data.cnpj,
            name: data.name,
            nameFantasy: data.nameFantasy,
        });
        await this.ormRepository.save(company);
        return company;
    }
    async FindByCNPJ(cnpj) {
        const company = await this.ormRepository.findOne({ where: { cnpj } });
        return company;
    }
    async FindById(id) {
        const company = await this.ormRepository.findOne(id);
        return company;
    }
    async save(data) {
        const company = await this.ormRepository.save(data);
        return company;
    }
}
exports.default = CompanyRepository;
