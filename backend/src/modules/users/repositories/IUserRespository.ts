import IUserCreateDTO from "../dtos/IUserCreateDTO";
import User from "../infra/typeorm/entities/User";

export default interface IUserRepository {
  create(data: IUserCreateDTO): Promise<User>;
  FindById(id: string): Promise<User | undefined>;
  FindByEmail(email: string): Promise<User | undefined>;
  save(data: User): Promise<User>;
}
