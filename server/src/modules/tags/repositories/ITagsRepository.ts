import Tag from '../infra/typeorm/entities/Tag';
import ICreateTagDTO from '../dtos/ICreateTagDTO';

export default interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<Tag>;
  save(data: ICreateTagDTO): Promise<Tag>;
}
