import FakeCompanyRepository from "@modules/companies/repositories/fakes/FakeCompanyRepository";
import CreateCompanyService from "@modules/companies/services/CreateCompanyService";
import AppError from "@shared/errors/AppError";
import FakeHashProvider from "../providers/HashProviders/fakes/FakeHashProvider";
import FakeUserRepository from "../repositories/fakes/FakeUserRepository"
import CreateUserService from "./CreateUserService";

describe( 'CreateUser', () => {
  it('should be able to create a new user', async () =>{
    const fakeUserRepository = new FakeUserRepository();
    const fakeCompanyRepository = new FakeCompanyRepository();
    const createCompany = new CreateCompanyService(fakeCompanyRepository);
    const fakeHash = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUserRepository, fakeCompanyRepository,fakeHash);

    const company = await createCompany.execute({
      cnpj: 10222511000126,
      name: "Testes Unitários",
      nameFantasy: "Testando a criação",
    })

    const user = await createUser.execute({
      email: "teste@teste.com.br",
      idsCompanies: [
        company.id
      ],
      name: "Fulano de Tal",
      password: "123456"
    })
    expect(user).toHaveProperty('id');
  })

  it('should not be able to create a new user, company not exist', async () =>{
    const fakeUserRepository = new FakeUserRepository();
    const fakeCompanyRepository = new FakeCompanyRepository();
    const fakeHash = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUserRepository, fakeCompanyRepository,fakeHash);

    await expect(createUser.execute({
      email: "teste@teste.com.br",
      idsCompanies: [
        '315135123512'
      ],
      name: "Fulano de Tal",
      password: "123456"
    })).rejects.toBeInstanceOf(AppError);
  })
  it('should not be able to create already user.', async () =>{
    const fakeUserRepository = new FakeUserRepository();
    const fakeCompanyRepository = new FakeCompanyRepository();
    const createCompany = new CreateCompanyService(fakeCompanyRepository);
    const fakeHash = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUserRepository, fakeCompanyRepository,fakeHash);

    const company = await createCompany.execute({
      cnpj: 10222511000126,
      name: "Testes Unitários",
      nameFantasy: "Testando a criação",
    })

    const user = await createUser.execute({
      email: "teste@teste.com.br",
      idsCompanies: [
        company.id
      ],
      name: "Fulano de Tal",
      password: "123456"
    })
    expect(user).toHaveProperty('id');
  })
})
