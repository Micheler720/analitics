import ICompanyCreateDTO from "@modules/companies/dtos/ICompanyCreateDTO";
import Company from "@modules/companies/infra/typeorm/entities/Company";
import ICompanyRepository from "../ICompanyRepository";
import { v4 as uuid }  from 'uuid';

class FakeCompanyRepository implements ICompanyRepository{

  private companies: Company[] = [];

  async create(data: ICompanyCreateDTO): Promise<Company> {
    const company = new Company();
    Object.assign(company, { id: uuid() }, data );
    this.companies.push(company);
    return company;
  }

  async FindByCNPJ(cnpj: number): Promise<Company | undefined> {
    const company = this.companies.find( company => company.cnpj === cnpj );
    return company;
  }

  async FindById(id: string): Promise<Company | undefined> {
    const company = this.companies.find( company => company.id === id );
    return company;
  }

  async save(data: Company): Promise<Company> {
    const indexCompany = this.companies.findIndex( company => company.id === data.id );
    this.companies[indexCompany] = data;
    return data;
  }

  async FindByIds(ids: string[]): Promise<Company[]> {
    const companiesFilter = this.companies.filter(companie =>{
      const newCompanie = ids.forEach( id => {
          return id === companie.id ? companie : {};
      })
      return newCompanie;
    })
    return companiesFilter;
  }

}

export default FakeCompanyRepository;
