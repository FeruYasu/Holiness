import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AddParticipantsToEventService from '@modules/events/services/AddParticipantsToEventService';

export default class EventsParticipantsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { eventId, usersIds } = request.body;

    const addParticipants = container.resolve(AddParticipantsToEventService);

    const event = await addParticipants.execute({
      eventId,
      usersIds,
    });

    return response.json(event);
  }
}
