import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateSermonsService from '@modules/sermons/services/CreateSermonsService';
import ListSermonsService from '@modules/sermons/services/ListSermonsService';
import UpdateSermonsTagsService from '@modules/sermons/services/UpdateSermonsTagsService';
import { classToClass } from 'class-transformer';

export default class SermonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSermons = container.resolve(ListSermonsService);

    const sermons = await listSermons.execute();

    return response.json(classToClass(sermons));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title,
      preacher_id,
      description,
      video_url,
      tags_ids,
    } = request.body;

    const createSermon = container.resolve(CreateSermonsService);

    const sermon = await createSermon.execute({
      title,
      preacher_id,
      description,
      video_url,
    });

    const UpdateSermonTags = container.resolve(UpdateSermonsTagsService);

    const sermonWithTags = await UpdateSermonTags.execute({
      sermonId: sermon.id,
      tagsIds: tags_ids,
    });

    return response.json(classToClass(sermonWithTags));
  }
}
