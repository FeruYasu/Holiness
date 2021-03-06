import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to create a new User', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'oi@oi.com.br',
      password: '123123',
      birthdate: '10/10/1994',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new User with same email ', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'oi@oi.com.br',
      password: '123123',
      birthdate: '10/10/1994',
    });

    expect(
      createUser.execute({
        name: 'Oi Doe',
        email: 'oi@oi.com.br',
        password: '234',
        birthdate: '10/10/1994',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
