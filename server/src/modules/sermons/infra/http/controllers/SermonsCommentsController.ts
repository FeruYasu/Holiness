import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UpdateSermonsCommentsService from '@modules/sermons/services/UpdateSermonsCommentsService';

import { classToClass } from 'class-transformer';

export default class SermonsCommentsController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { sermonId, commentId } = request.body;

    const updateSermonComments = container.resolve(
      UpdateSermonsCommentsService,
    );

    const sermon = await updateSermonComments.execute({
      sermonId,
      commentId,
    });

    return response.json(classToClass(sermon));
  }
}
