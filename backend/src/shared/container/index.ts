import { container } from "tsyringe";

import ICompanyRepository from "@modules/companies/repositories/ICompanyRepository";
import CompanyRepository from "@modules/companies/infra/typeorm/repositories/CompanyRepository";
import IUserRepository from "@modules/users/repositories/IUserRespository";
import UserRepository from "@modules/users/infra/typeorm/repositories/UserRepository";

import '@modules/users/providers/HashProviders';

container.registerSingleton<ICompanyRepository>(
  "CompaniesRepository",
  CompanyRepository
);

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)
