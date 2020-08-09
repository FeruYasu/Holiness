import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Ministry from '@modules/ministries/infra/typeorm/entities/Ministry';
import IMinistriesRepository from '../repositories/IMinistriesRepository';

interface ILeaders {
  user_id: string;
}

interface IRequest {
  name: string;
  local?: string;
  date?: Date;
  hour?: Date;
  leaders?: ILeaders[];
  members_id?: string[];
}

@injectable()
class CreateMinistriesService {
  constructor(
    @inject('MinistriesRepository')
    private ministriesRepository: IMinistriesRepository,
  ) {}

  public async execute({
    name,
    leaders,
    local,
    date,
    hour,
  }: IRequest): Promise<Ministry> {
    const checkMinistriesExists = await this.ministriesRepository.findByName(
      name,
    );

    if (checkMinistriesExists) {
      throw new AppError('Ministries already used.');
    }

    const ministries = await this.ministriesRepository.create({
      name,
      leaders,
      local,
      date,
      hour,
    });

    return ministries;
  }
}

export default CreateMinistriesService;
