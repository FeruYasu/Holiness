import { getRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Ministries from '@modules/ministries/infra/typeorm/entities/Ministries';

interface IRequest {
  name: string;
  local?: string;
  date?: Date;
  hour?: Date;
  leaders_id?: string;
  members_id?: string;
}

class CreateMinistriesService {
  public async execute({
    name,
    local,
    date,
    hour,
    leaders_id,
    members_id,
  }: IRequest): Promise<Ministries> {
    const ministriesRepository = getRepository(Ministries);

    if (!name) {
      throw new AppError('Name is mandatory.');
    }

    const checkMinistriesExists = await ministriesRepository.findOne({
      where: { name },
    });

    if (checkMinistriesExists) {
      throw new AppError('Ministries already used.');
    }

    const ministries = ministriesRepository.create({
      name,
      local,
      date,
      hour,
      leaders_id,
      members_id,
    });

    await ministriesRepository.save(ministries);

    return ministries;
  }
}

export default CreateMinistriesService;
