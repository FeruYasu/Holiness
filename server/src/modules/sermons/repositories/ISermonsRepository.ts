import Sermon from '../infra/typeorm/entities/Sermon';
import ICreateSermonDTO from '../dtos/ICreateSermonDTO';

export default interface IMinistrieRepository {
  create(data: ICreateSermonDTO): Promise<Sermon>;
  save(data: ICreateSermonDTO): Promise<Sermon>;
  // listAll(): Promise<Sermon[] | undefined>;
}
