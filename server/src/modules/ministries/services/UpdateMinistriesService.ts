import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IMinistriesRepository from '../repositories/IMinistriesRepository';

import Ministry from '../infra/typeorm/entities/Ministry';

interface IRequest {
  name: string;
  leaders_id?: string;
  local?: string;
  date?: Date;
  hour?: Date;
  members_id?: string;
}

@injectable()
class UpdateMinistriesService {
  constructor(
    @inject('MinistriesRepository')
    private ministriesRepository: IMinistriesRepository,
  ) {}

  public async execute({
    name,
    leaders_id,
    local,
    date,
    hour,
    members_id,
  }: IRequest): Promise<Ministry> {
    const ministry = await this.ministriesRepository.findByName(name);

    if (!ministry) {
      throw new AppError('User not found');
    }

    if (local) {
      ministry.local = local;
    }

    if (date) {
      ministry.date = date;
    }

    if (hour) {
      ministry.hour = hour;
    }

    if (leaders_id) {
      ministry.leaders_id = leaders_id;
    }

    if (members_id) {
      ministry.members_id = members_id;
    }

    return this.ministriesRepository.save(ministry);
  }
}

export default UpdateMinistriesService;
