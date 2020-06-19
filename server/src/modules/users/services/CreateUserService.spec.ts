import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new User', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'oi@oi.com.br',
      password: '123123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new User with same email ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'John Doe',
      email: 'oi@oi.com.br',
      password: '123123',
    });

    expect(
      createUser.execute({
        name: 'Oi Doe',
        email: 'oi@oi.com.br',
        password: '234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
