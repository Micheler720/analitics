import CreateCompanyService from "@modules/companies/services/CreateCompanyService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CompanyController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCompany = container.resolve(CreateCompanyService);
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
