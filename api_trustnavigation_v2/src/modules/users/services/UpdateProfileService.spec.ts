import 'reflect-metadata';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import AppError from '@shared/error/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });
  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'testadot Atualizado',
      email: 'testadorA@teste.com',
    });

    expect(updatedUser.name).toBe('testadot Atualizado');
    expect(updatedUser.email).toBe('testadorA@teste.com');
  });

  it('should not be able to change to another user email ', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Usuario',
      email: 'usuario@teste.com',
      password: '123teste',
    });

    const anotherUser = await fakeUsersRepository.create({
      name: 'Outro Usuario',
      email: 'outrousuario@teste.com',
      password: '123teste',
    });

    await expect(
      updateProfile.execute({
        user_id: anotherUser.id,
        name: 'Outro Usuario',
        email: 'usuario@teste.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'testadot Atualizado',
      email: 'testadorA@teste.com',
      old_password: '123teste',
      password: '123123',
    });
    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update the password without old password ', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'testadot Atualizado',
        email: 'testadorA@teste.com',

        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password without old password ', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'testadot Atualizado',
        email: 'testadorA@teste.com',
        old_password: 'wrong-old-password',
        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should be able to update the profile from non-existing user', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'Testador',
        email: 'testador@teste.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
