import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateAnnouncementService from './CreateAnnouncementService';
import FakeAnnouncementRepository from '../repositories/fakes/FakeAnnouncementRepository';

let createAnnouncementService: CreateAnnouncementService;
let fakeAnnouncementeRepository: FakeAnnouncementRepository;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateAnnouncement', () => {
  beforeEach(() => {
    fakeAnnouncementeRepository = new FakeAnnouncementRepository();
    fakeUsersRepository = new FakeUsersRepository();

    createAnnouncementService = new CreateAnnouncementService(
      fakeAnnouncementeRepository,
    );
  });
  it('should be able to create an announcement', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'oi@oi.com.br',
      password: '123123',
      birthdate: new Date(),
    });

    const announcement = await createAnnouncementService.execute({
      title: 'Primeiro aviso',
      content: 'Conteudo do primeiro aviso',
      user_id: user.id,
    });

    await expect(announcement).toHaveProperty('id');
  });
});
