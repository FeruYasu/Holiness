import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import Event from '../infra/typeorm/entities/Event';

import IEventsRepository from '../repositories/IEventsRepository';

interface IRequest {
  eventId: string;
  usersIds: string[];
}

@injectable()
class AddParticipantsToEventService {
  constructor(
    @inject('EventsRepository')
    public eventsRepository: IEventsRepository,

    @inject('UsersRepository')
    public usersRepository: IUsersRepository,
  ) {}

  public async execute({
    eventId,
    usersIds,
  }: IRequest): Promise<Event | undefined> {
    const event = await this.eventsRepository.findById(eventId);

    const participants = await this.usersRepository.findByIds(usersIds);

    if (event && participants) {
      event.participants = participants;

      this.eventsRepository.save(event);
    }

    return event;
  }
}

export default AddParticipantsToEventService;
