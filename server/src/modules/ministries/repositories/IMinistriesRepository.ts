import Ministry from '../infra/typeorm/entities/Ministry';
import ICreateServiceDTO from '../dtos/ICreateMinistryDTO';

export default interface IMinistrieRepository {
  create(data: ICreateServiceDTO): Promise<Ministry>;
  save(data: ICreateServiceDTO): Promise<Ministry>;
  findByName(name: string): Promise<Ministry | undefined>;
}
