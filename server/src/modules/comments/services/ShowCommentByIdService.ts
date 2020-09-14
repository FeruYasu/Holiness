import { inject, injectable } from 'tsyringe';
import Comment from '@modules/comments/infra/typeorm/entities/Comment';

import ICommentsRepository from '../repositories/ICommentsRepository';

@injectable()
class ShowCommentByIdService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {}

  public async execute(id: string): Promise<Comment | undefined> {
    const comment = await this.commentsRepository.findById(id);

    return comment;
  }
}

export default ShowCommentByIdService;
