import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';
import ShowCommentByIdService from './ShowCommentByIdService';

let fakeCommentsRepository: FakeCommentsRepository;

let fakeUsersRepository: FakeUsersRepository;
let showCommentByIdService: ShowCommentByIdService;

describe('CreateComments', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();
    fakeUsersRepository = new FakeUsersRepository();

    showCommentByIdService = new ShowCommentByIdService(fakeCommentsRepository);
  });

  it('should be able to create a new Comment', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'oi@oi.com.br',
      password: '123123',
      birthdate: new Date(),
    });

    const comment = await fakeCommentsRepository.create({
      content: 'Comentário',
      user_id: user.id,
    });

    const getComment = await showCommentByIdService.execute(comment.id);

    expect(getComment).toBe(comment);
  });
});
