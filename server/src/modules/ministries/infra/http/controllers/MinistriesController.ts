import { Request, Response } from 'express';
import CreateMinistriesService from '@modules/ministries/services/CreateMinistriesService';
import UpdateMinistriesService from '@modules/ministries/services/UpdateMinistriesService';
import { container } from 'tsyringe';
import ListMinistriesService from '@modules/ministries/services/ListMinistriesService';

import { classToClass } from 'class-transformer';

export default class MinistriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMinistries = container.resolve(ListMinistriesService);

    const allMinistries = await listMinistries.execute();

    return response.json(classToClass(allMinistries));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, leaders } = request.body;

    const createMinistry = container.resolve(CreateMinistriesService);

    const ministry = await createMinistry.execute({ name, leaders });

    return response.json(ministry);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, leaders_id, local, members_id, date, hour } = request.body;

    const UpdateMinistriy = container.resolve(UpdateMinistriesService);

    const ministry = await UpdateMinistriy.execute({
      name,
      leaders_id,
      local,
      members_id,
      date,
      hour,
    });

    return response.json(ministry);
  }
}
