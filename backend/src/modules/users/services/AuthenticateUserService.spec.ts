import FakeCompanyRepository from "@modules/companies/repositories/fakes/FakeCompanyRepository";
import CreateCompanyService from "@modules/companies/services/CreateCompanyService";
import FakeHashProvider from "../providers/HashProviders/fakes/FakeHashProvider";
import FakeUserRepository from "../repositories/fakes/FakeUserRepository"
import AuthenticateUserService from "./AuthenticateUserService";
import CreateUserService from "./CreateUserService";

describe('AuthenticateUser', ()=>{
  it('should be able to autheticate', async ()=>{
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();
    const fakeCompanyRepository = new FakeCompanyRepository();
    const createAuthenticate = new AuthenticateUserService(fakeUserRepository, fakeHashProvider);
    const createUser = new CreateUserService(fakeUserRepository,fakeCompanyRepository, fakeHashProvider);
    const createCompany = new CreateCompanyService(fakeCompanyRepository);

    const company = await createCompany.execute({
      cnpj: 11111111111111,
      name: "Teste teste",
      nameFantasy: "Name Fantasy"
    })

    const user = await createUser.execute({
      email: 'teste@teste.com.br',
      idsCompanies: [
        company.id
      ],
      name: "Fulano de Tal",
      password: "86320956"
    })

    const response = await createAuthenticate.execute({
      email: user.email,
      password: user.password
    })

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);

  })
})
