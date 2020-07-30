import 'reflect-metadata';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

import AppError from '@shared/error/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });
  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    const response = await authenticateUser.execute({
      email: 'testador@teste.com',
      password: '123teste',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'testador@teste.com',
        password: '123teste',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    await expect(
      authenticateUser.execute({
        email: 'testador@teste.com',
        password: '123wrongteste',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
