import ICompanyCreateDTO from "../dtos/ICompanyCreateDTO";
import Company from "../infra/typeorm/entities/Company";

export default interface ICompanyRepository {
  create(data: ICompanyCreateDTO): Promise<Company>;
  FindByCNPJ(cnpj: number): Promise<Company | undefined>;
  FindById(id: string): Promise<Company | undefined>;
  save(data: Company): Promise<Company>;
  FindByIds(ids: string[]): Promise<Company[]>;
}
