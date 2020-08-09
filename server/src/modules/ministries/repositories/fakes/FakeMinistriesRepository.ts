import { uuid } from 'uuidv4';

import IMinistriessRepository from '@modules/ministries/repositories/IMinistriesRepository';
import ICreateMinistryDTO from '@modules/ministries/dtos/ICreateMinistryDTO';

import Ministry from '../../infra/typeorm/entities/Ministry';

class MinistriessRepository implements IMinistriessRepository {
  private ministries: Ministry[] = [];

  public async create({ name }: ICreateMinistryDTO): Promise<Ministry> {
    const ministry = new Ministry();

    Object.assign(ministry, { id: uuid(), name });

    this.ministries.push(ministry);

    return ministry;
  }

  public async save(ministry: Ministry): Promise<Ministry> {
    const findIndex = this.ministries.findIndex(
      findMinistry => findMinistry.id === ministry.id,
    );

    this.ministries[findIndex] = ministry;
    return ministry;
  }

  public async findByName(name: string): Promise<Ministry | undefined> {
    const findMinistries = await this.ministries.find(
      user => user.name === name,
    );

    return findMinistries;
  }

  public async listAll(): Promise<Ministry[] | undefined> {
    const ministriesList = await this.ministries;

    return ministriesList;
  }
}

export default MinistriessRepository;
