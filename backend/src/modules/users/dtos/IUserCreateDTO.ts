import Company from "@modules/company/infra/typeorm/entities/Company";

export default interface IUserCreateDTO{
  name: string;
  email: string;
  password: string;
  companies: Company[];
}

