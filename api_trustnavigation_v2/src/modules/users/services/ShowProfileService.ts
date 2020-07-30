import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/error/AppError';

interface IRequest {
  user_id: string;
}

@injectable()
export default class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}
  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}
