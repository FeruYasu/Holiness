import Ministry from '../infra/typeorm/entities/Ministry';
import ICreateServiceDTO from '../dtos/ICreateMinistryDTO';

export default interface IMinistrieRepository {
  create(data: ICreateServiceDTO): Promise<Ministry>;
  save(data: ICreateServiceDTO): Promise<Ministry>;
  findByName(name: string): Promise<Ministry | undefined>;
  listAll(): Promise<Ministry[] | undefined>;
  findById(id: string): Promise<Ministry | undefined>;
}
