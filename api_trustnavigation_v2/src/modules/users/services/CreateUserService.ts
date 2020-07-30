import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import AppError from '@shared/error/AppError';
import { injectable, inject } from 'tsyringe';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) {}
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const checkUserExist = await this.userRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.cacheProvider.invalidatePrefix('providers-list');

    return user;
  }
}
