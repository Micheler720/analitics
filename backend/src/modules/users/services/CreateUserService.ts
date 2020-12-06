import Company from "@modules/companies/infra/typeorm/entities/Company";
import ICompanyRepository from "@modules/companies/repositories/ICompanyRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import User from "../infra/typeorm/entities/User";
import IHashProvider from "../providers/HashProviders/models/IHashProvider";
import IUserRepository from "../repositories/IUserRespository";

interface IRequest{
  name: string;
  email: string;
  password: string;
  idsCompanies: string[];
}

@injectable()
class CreateUserService {

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('CompaniesRepository')
    private companyRepository: ICompanyRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

  ) {

  }
  public async execute({email, idsCompanies, password, name}: IRequest): Promise<User>{
    const companies= await this.companyRepository.FindByIds(idsCompanies);
    const checkUserExist = await this.userRepository.FindByEmail(email);
    if(checkUserExist){
      throw new AppError(
        'Email already exists, it will not be possible to register. ',
        401,
      )
    }
    if(companies.length === 0){
      throw new AppError(
        'Not company exists, it will not be possible to register. ',
        401,
      )
    }
    const hashed =await this.hashProvider.generatHash(password);
    const user = await this.userRepository.create({
      companies,
      email,
      name,
      password: hashed
    });

    return user;

  }
}

export default CreateUserService;
