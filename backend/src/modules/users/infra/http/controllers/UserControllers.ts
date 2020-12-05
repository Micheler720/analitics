import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response} from 'express';
import { container } from 'tsyringe';

class UserControllers {

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, idsCompanies } = request.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({ email, password, name, idsCompanies});

    return response.json(user);

  }
}
export default UserControllers;
