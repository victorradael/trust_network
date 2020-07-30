import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import uploadConfig from '@config/upload';
import AppError from '@shared/error/AppError';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}
  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdatedEmail = await this.userRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('Email already in use');
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password'
      );
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password
      );

      if (!checkOldPassword) {
        throw new AppError('Old password dos not match.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.userRepository.save(user);
  }
}
