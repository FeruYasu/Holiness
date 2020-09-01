import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateSermonsService from '@modules/sermons/services/CreateSermonsService';

export default class SermonsController {
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
