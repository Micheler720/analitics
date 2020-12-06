import IHashProvider from "../models/IHashProvider";
import {hash, compare} from 'bcryptjs';

export default class BCryptHashProvider implements IHashProvider{
  async generatHash(payload: string): Promise<string> {
    const hashed = await hash(payload, 8);
    return hashed;
  }
  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return await compare(payload, hashed);
  }

}
