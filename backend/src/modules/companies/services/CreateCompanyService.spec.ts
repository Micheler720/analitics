import 'reflect-metadata';
import AppError from "@shared/errors/AppError";
import FakeCompanyRepository from "../repositories/fakes/FakeCompanyRepository"
import CreateCompanyService from "./CreateCompanyService";

describe('CreateCompany', ()=>{
  it('should be able to create a new company', async ()=>{
    const fakeCompanyRepository = new FakeCompanyRepository();
    const createCompany = new CreateCompanyService(fakeCompanyRepository);
    const company = await createCompany.execute({
      cnpj: 2022452300129,
      name: "Testes Unitários",
      nameFantasy: "Testando a criação",
    })
    expect(company).toHaveProperty('id');
  } )
  it('should not be able to create a new company if exists', async ()=>{
    const fakeCompanyRepository = new FakeCompanyRepository();
    const createCompany = new CreateCompanyService(fakeCompanyRepository);
    await createCompany.execute({
      cnpj: 2022452300129,
      name: "Testes Unitários",
      nameFantasy: "Testando a criação",
    })

    expect( createCompany.execute({
      cnpj: 2022452300129,
      name: "Testes Segunda Criaçãp",
      nameFantasy: "Testando a criação",
    })).rejects.toBeInstanceOf(AppError);

  })

})
