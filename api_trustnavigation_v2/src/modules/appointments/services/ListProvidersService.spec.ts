import 'reflect-metadata';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProvidersService from '@modules/appointments/services/ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;

let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider
    );
  });
  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Testador 1',
      email: 'testador1@teste.com',
      password: '123teste',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Testador 2',
      email: 'testador2@teste.com',
      password: '123teste',
    });

    const user3 = await fakeUsersRepository.create({
      name: 'Testador 3',
      email: 'testador3@teste.com',
      password: '123teste',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Logged User',
      email: 'loggeduser@teste.com',
      password: '123teste',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2, user3]);
  });
});
