import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateSermonsService from '@modules/sermons/services/CreateSermonsService';
import ListSermonsService from '@modules/sermons/services/ListSermonsService';

export default class SermonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSermons = container.resolve(ListSermonsService);

    const sermons = await listSermons.execute();

    return response.json(sermons);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, preacher_id, description, video_url } = request.body;

    const createSermon = container.resolve(CreateSermonsService);

    const ministry = await createSermon.execute({
      title,
      preacher_id,
      description,
      video_url,
    });

    return response.json(ministry);
  }
}
