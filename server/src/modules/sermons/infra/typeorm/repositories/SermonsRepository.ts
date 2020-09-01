import { getRepository, Repository } from 'typeorm';

import ISermonsRepository from '@modules/sermons/repositories/ISermonsRepository';

import ICreateSermonDTO from '@modules/sermons/dtos/ICreateSermonDTO';

import Sermon from '../entities/Sermon';

class SermonsRepository implements ISermonsRepository {
  private ormRepository: Repository<Sermon>;

  constructor() {
    this.ormRepository = getRepository(Sermon);
  }

  public async create({
    title,
    description,
    preacher_id,
    video_url,
  }: ICreateSermonDTO): Promise<Sermon> {
    const sermon = this.ormRepository.create({
      title,
      description,
      preacher_id,
      video_url,
    });

    await this.ormRepository.save(sermon);

    return sermon;
  }

  public async save(sermon: Sermon): Promise<Sermon> {
    return this.ormRepository.save(sermon);
  }

  public async listAll(): Promise<Sermon[] | undefined> {
    const sermons = await this.ormRepository.find({ relations: ['preacher'] });

    return sermons;
  }
}

export default SermonsRepository;
