import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateTagsService from '@modules/tags/services/CreateTagService';

export default class TagsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTag = container.resolve(CreateTagsService);

    const tag = await createTag.execute({
      name,
    });

    return response.json(tag);
  }
}
