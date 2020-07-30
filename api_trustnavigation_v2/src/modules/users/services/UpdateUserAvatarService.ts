import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProviders/models/IStorageProvider';
import uploadConfig from '@config/upload';
import AppError from '@shared/error/AppError';

interface RequestDTO {
  user_id: string;
  avatarFilename: string;
}

@injectable()
export default class UpdateAvatarService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}
  public async execute({ user_id, avatarFilename }: RequestDTO): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only autenthicated users can change avatar.', 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    user.avatar = filename;

    await this.userRepository.save(user);

    return user;
  }
}
