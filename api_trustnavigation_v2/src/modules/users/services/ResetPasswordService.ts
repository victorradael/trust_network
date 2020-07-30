import { isAfter, addHours } from 'date-fns';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import AppError from '@shared/error/AppError';
import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';

interface IRequest {
  password: string;
  token: string;
}

@injectable()
export default class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}
  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exist');
    }
    const user = await this.userRepository.findById(userToken?.user_id);

    if (!user) {
      throw new AppError('User does not exist');
    }

    const tokenCreatedAt = userToken.created_at;

    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.userRepository.save(user);
  }
}
