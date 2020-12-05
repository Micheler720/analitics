import { container } from "tsyringe";

import ICompanyRepository from "@modules/company/repositories/ICompanyRepository";
import CompanyRepository from "@modules/company/infra/typeorm/repositories/CompanyRepository";

container.registerSingleton<ICompanyRepository>(
  "CompaniesRepository",
  CompanyRepository
);
