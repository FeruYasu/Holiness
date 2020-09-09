import { getRepository, Repository } from 'typeorm';

import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';

import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';

import Comment from '../entities/Comment';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create({
    content,
    user_id,
  }: ICreateCommentDTO): Promise<Comment> {
    const comment = this.ormRepository.create({
      content,
      user_id,
    });

    await this.ormRepository.save(comment);

    return comment;
  }

  public async save(comment: Comment): Promise<Comment> {
    return this.ormRepository.save(comment);
  }

  public async findById(id: string): Promise<Comment | undefined> {
    const comment = this.ormRepository.findOne({
      where: { id },
      relations: ['replies'],
    });

    return comment;
  }
}

export default CommentsRepository;
