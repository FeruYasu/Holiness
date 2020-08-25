import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AddParticipantsToEventService from '@modules/events/services/AddParticipantsToEventService';
import DeleteParticipantsFromEvent from '@modules/events/services/DeleteParticipantsFromEvent';
import { classToClass } from 'class-transformer';

export default class EventsParticipantsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { eventId, usersIds } = request.body;

    const addParticipants = container.resolve(AddParticipantsToEventService);

    const event = await addParticipants.execute({
      eventId,
      usersIds,
    });

    return response.json(classToClass(event));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { eventId, participantsIds } = request.body;

    const deleteParticipants = container.resolve(DeleteParticipantsFromEvent);

    const event = await deleteParticipants.execute({
      eventId,
      usersIds: participantsIds,
    });

    return response.json(classToClass(event));
  }
}
