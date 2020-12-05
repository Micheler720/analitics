import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import ICompanyCreateDTO from "../dtos/ICompanyCreateDTO";
import ICompanyRepository from "../repositories/ICompanyRepository";
import Company from "../infra/typeorm/entities/Company";

@injectable()
class CreateCompanyService {
  constructor(
    @inject("CompaniesRepository")
    private companyRepository: ICompanyRepository
  ) {}

  public async execute({
    cnpj,
    name,
    nameFantasy,
  }: ICompanyCreateDTO): Promise<Company> {
    const checkCompanyExist = await this.companyRepository.FindByCNPJ(cnpj);

    if (checkCompanyExist) {
      throw new AppError(
        "Company already exists, it will not be possible to register.",
        401
      );
    }
    const company = await this.companyRepository.create({
      cnpj,
      name,
      nameFantasy,
    });
    return company;
  }
}

export default CreateCompanyService;
