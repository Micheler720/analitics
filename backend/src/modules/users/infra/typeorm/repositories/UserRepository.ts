import IUserCreateDTO from "@modules/users/dtos/IUserCreateDTO";
import IUserRepository from "@modules/users/repositories/IUserRespository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

class UserRepository implements IUserRepository{
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  async create(data: IUserCreateDTO): Promise<User> {
    const user =  this.ormRepository.create({
      email: data.email,
      companies: data.companies,
      name: data.name,
      password: data.password,
    });
    await this.ormRepository.save(user);
    return user;
  }
  async FindById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }
  async FindByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({where: { email }});
    return user;
  }
  async save(data: User): Promise<User> {
    await this.ormRepository.save(data);
    return data;
  }

}
export default UserRepository;
