import { getRepository, Repository } from 'typeorm';

import IMinistriesRepository from '@modules/ministries/repositories/IMinistriesRepository';

import ICreateMinistryDTO from '@modules/ministries/dtos/ICreateMinistryDTO';

import Ministry from '../entities/Ministry';

class MinistriesRepository implements IMinistriesRepository {
  private ormRepository: Repository<Ministry>;

  constructor() {
    this.ormRepository = getRepository(Ministry);
  }

  public async create({
    name,
    leaders,
  }: ICreateMinistryDTO): Promise<Ministry> {
    const ministry = this.ormRepository.create({
      name,
      ministries_leaders: leaders,
    });

    await this.ormRepository.save(ministry);

    return ministry;
  }

  public async save(ministry: Ministry): Promise<Ministry> {
    return this.ormRepository.save(ministry);
  }

  public async findByName(name: string): Promise<Ministry | undefined> {
    const ministry = this.ormRepository.findOne({ where: { name } });

    return ministry;
  }

  public async listAll(): Promise<Ministry[] | undefined> {
    const ministriesList = this.ormRepository.find({
      relations: [
        'ministries_leaders',
        'ministries_leaders.leader',
        'ministries_members',
        'ministries_members.member',
      ],
    });

    return ministriesList;
  }

  public async findById(id: string): Promise<Ministry | undefined> {
    const ministry = this.ormRepository.findOne({
      where: { id },
      relations: ['ministries_leaders', 'ministries_members'],
    });

    return ministry;
  }
}

export default MinistriesRepository;
