import { uuid } from 'uuidv4';

import ISermonsRepository from '@modules/sermons/repositories/ISermonsRepository';
import ICreateSermonDTO from '@modules/sermons/dtos/ICreateSermonDTO';

import Sermon from '../../infra/typeorm/entities/Sermon';

class SermonsRepository implements ISermonsRepository {
  private sermons: Sermon[] = [];

  public async create({
    title,
    description,
    preacher_id,
    video_url,
  }: ICreateSermonDTO): Promise<Sermon> {
    const sermon = new Sermon();

    Object.assign(sermon, {
      id: uuid(),
      title,
      description,
      preacher_id,
      video_url,
    });

    return sermon;
  }

  public async save(sermon: Sermon): Promise<Sermon> {
    const findIndex = this.sermons.findIndex(
      findSermon => findSermon.id === sermon.id,
    );

    this.sermons[findIndex] = sermon;
    return sermon;
  }
}

export default SermonsRepository;
