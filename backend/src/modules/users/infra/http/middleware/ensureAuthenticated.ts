import AppError from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { Request, Response, NextFunction } from 'express';


interface ITokenPayload{
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction
  ){
  const authHeader =  request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT token is missing.', 401);
  }
  const [, token] = authHeader.split(' ');
  const { secret } = authConfig.jwt;
   try {
      const decode = verify(token, secret);
      const { sub } = decode as ITokenPayload;
      request.user = {
          id: sub,
      };
      return next();
  } catch {
      throw new AppError('Invalid JWT token.', 401);
  }
}
