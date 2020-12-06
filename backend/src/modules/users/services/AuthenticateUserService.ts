import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { sign } from 'jsonwebtoken';
import IHashProvider from "../providers/HashProviders/models/IHashProvider";
import IUserRepository from "../repositories/IUserRespository";
import authConfig from '@config/auth';

interface IRequest{
  password: string;
  email: string;
}

@injectable()
class AuthenticateUserService {

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider

  ) {

  }

  public async execute({email, password}: IRequest){
    const user = await this.userRepository.FindByEmail(email);
    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }
    const passwordMatched = this.hashProvider.generatHash(password);
    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    });

    return {
      user,
      token
    }
  }
}

export default AuthenticateUserService;
