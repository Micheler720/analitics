import IUserCreateDTO from "@modules/users/dtos/IUserCreateDTO";
import User from "@modules/users/infra/typeorm/entities/User";
import IUserRepository from "../IUserRespository";
import {v4 as uuid } from 'uuid';

class FakeUserRepository implements IUserRepository{

  private users: User[] = [];

  async create(data: IUserCreateDTO): Promise<User> {
    const user = new User();
    Object.assign(user, {id: uuid()}, data);
    this.users.push(user);
    return user;
  }
  async FindById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return user;
  }
  async FindByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);
    return user;
  }
  async save(data: User): Promise<User> {
    const indexUser = this.users.findIndex( user => user === data);
    this.users[indexUser] = data;
    return data;
  }


}
export default FakeUserRepository;
