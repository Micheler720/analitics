import AuthenticateUserService from "@modules/users/services/AuthenticateUserService";
import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

class SessionsControllers{

  public async create(request: Request, response: Response, _:NextFunction): Promise<Response>{
    const createSession = container.resolve(AuthenticateUserService);
    const {email, password} = request.body;
    const {user, token} = await createSession.execute({
      email,
      password
    });
    delete user.password;
    return response.json({user, token}).status(200)
  }


}

export default SessionsControllers;
