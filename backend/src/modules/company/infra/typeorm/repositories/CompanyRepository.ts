import ICompanyCreateDTO from "@modules/company/dtos/ICompanyCreateDTO";
import ICompanyRepository from "@modules/company/repositories/ICompanyRepository";
import { getRepository, Repository } from "typeorm";
import Company from "../entities/Company";

class CompanyRepository implements ICompanyRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  async create(data: ICompanyCreateDTO): Promise<Company> {
    const company = this.ormRepository.create({
      cnpj: data.cnpj,
      name: data.name,
      nameFantasy: data.nameFantasy,
    });
    await this.ormRepository.save(company);
    return company;
  }

  async FindByCNPJ(cnpj: number): Promise<Company | undefined> {
    const company = await this.ormRepository.findOne({ where: { cnpj } });
    return company;
  }

  async FindById(id: string): Promise<Company | undefined> {
    const company = await this.ormRepository.findOne(id);
    return company;
  }

  async save(data: Company): Promise<Company> {
    const company = await this.ormRepository.save(data);
    return company;
  }
}

export default CompanyRepository;
