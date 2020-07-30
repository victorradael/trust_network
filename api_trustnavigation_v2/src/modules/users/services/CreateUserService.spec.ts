import 'reflect-metadata';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHasProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import CreateUserService from '@modules/users/services/CreateUserService';
import AppError from '@shared/error/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHasProvider;
let fakeCacheProvider: FakeCacheProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHasProvider();
    fakeCacheProvider = new FakeCacheProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider
    );
  });
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('testador');
    expect(user.email).toBe('testador@teste.com');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    await expect(
      createUser.execute({
        name: 'testador',
        email: 'testador@teste.com',
        password: '123teste',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
