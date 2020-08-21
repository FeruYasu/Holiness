import Event from '../infra/typeorm/entities/Event';

interface IRequest {
  name: string;
  local: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

export default interface IMinistrieRepository {
  create(data: IRequest): Promise<Event>;
}
