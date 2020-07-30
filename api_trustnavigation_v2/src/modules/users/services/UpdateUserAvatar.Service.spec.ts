import 'reflect-metadata';

import FakeStorageProvider from '@shared/container/providers/StorageProviders/fakes/FakeStorageProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import AppError from '@shared/error/AppError';
import UpdateAvatarService from '@modules/users/services/UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatar: UpdateAvatarService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();
    updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    );
  });
  it('should be able to update avatar', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatarTeste.png',
    });

    expect(user.avatar).toBe('avatarTeste.png');
  });

  it('should not be able to update avatar from non existing user', async () => {
    expect(
      updateUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFilename: 'avatarTeste.png',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar when updating new one', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    );

    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123teste',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatarTeste.png',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatarTeste2.png',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatarTeste.png');
    expect(user.avatar).toBe('avatarTeste2.png');
  });
});
