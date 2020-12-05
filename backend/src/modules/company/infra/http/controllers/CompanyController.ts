import CreateCompanyService from "@modules/company/services/CreateCompanyService";
import { Request, Response } from "express";
import CompanyRepository from "../../typeorm/repositories/CompanyRepository";

class CompanyController {
  public async create(request: Request, response: Response): Promise<Response> {
    const companyRepository = new CompanyRepository();
    const createCompany = new CreateCompanyService(companyRepository);
    const { name, nameFantasy, cnpj } = request.body;
    const company = await createCompany.execute({
      name,
      nameFantasy,
      cnpj,
    });

    return response.json(company);
  }
}

export default CompanyController;
