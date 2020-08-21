import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateEventsService from '@modules/events/services/CreateEventsService';

export default class EventsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      local,
      start_date,
      start_hour,
      end_date,
      end_hour,
    } = request.body;

    const createEvent = container.resolve(CreateEventsService);

    const event = await createEvent.execute({
      name,
      description,
      local,
      start_date,
      start_hour,
      end_date,
      end_hour,
    });

    return response.json(event);
  }
}
