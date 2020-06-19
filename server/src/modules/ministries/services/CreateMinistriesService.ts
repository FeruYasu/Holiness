import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Ministry from '@modules/ministries/infra/typeorm/entities/Ministry';
import IMinistrieRepository from '../repositories/IMinistriesRepository';

interface IRequest {
  name: string;
  local?: string;
  date?: Date;
  hour?: Date;
  leaders_id?: string;
  members_id?: string;
}

@injectable()
class CreateMinistriesService {
  constructor(
    @inject('MinistriesRepositoy')
    private ministriesRepository: IMinistrieRepository,
  ) {}

  public async execute({
    name,
    local,
    date,
    hour,
    leaders_id,
    members_id,
  }: IRequest): Promise<Ministry> {
    const checkMinistriesExists = await this.ministriesRepository.findByName(
      name,
    );

    if (checkMinistriesExists) {
      throw new AppError('Ministries already used.');
    }

    const ministries = await this.ministriesRepository.create({
      name,
      local,
      date,
      hour,
      leaders_id,
      members_id,
    });

    return ministries;
  }
}

export default CreateMinistriesService;
