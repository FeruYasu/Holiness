import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IMinistrieRepository from '@modules/ministries/repositories/IMinistriesRepository';
import MinistriesRepository from '@modules/ministries/infra/typeorm/repositories/MinistriesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IMinistrieRepository>(
  'MinistriesRepository',
  MinistriesRepository,
);
