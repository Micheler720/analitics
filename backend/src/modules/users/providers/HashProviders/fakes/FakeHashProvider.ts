import IHashProvider from "../models/IHashProvider";

class FakeHashProvider implements IHashProvider {
  async generatHash(payload: string): Promise<string> {
    return payload;
  }
  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }

}
export default FakeHashProvider;
