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
  }: ICreateMinistryDTO): Promise<Ministry> {
    const user = this.ormRepository.create({  name });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: Ministry): Promise<Ministry> {
    return this.ormRepository.save(user);
  }

  public async findByName(name: string): Promise<Ministry | undefined> {
    const user = this.ormRepository.findOne({ where: name });

    return user;
  }


}

export default MinistriesRepository;
