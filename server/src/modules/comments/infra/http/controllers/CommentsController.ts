import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateCommentService from '@modules/comments/services/CreateCommentsService';
import ShowCommentServiceById from '@modules/comments/services/ShowCommentByIdService';
import { classToClass } from 'class-transformer';

export default class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content, reply_of } = request.body;

    const user_id = request.user.id;

    const createComment = container.resolve(CreateCommentService);

    const comment = await createComment.execute({
      content,
      user_id,
      reply_of,
    });

    return response.json(comment);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const showCommentServiceById = container.resolve(ShowCommentServiceById);

    const comment = await showCommentServiceById.execute(id);

    return response.json(classToClass(comment));
  }
}
