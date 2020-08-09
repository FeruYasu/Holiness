import FakeMinistriesRepository from '../repositories/fakes/FakeMinistriesRepository';
import UpdateMinistriesService from './UpdateMinistriesService';

let fakeMinistriesRepository: FakeMinistriesRepository;
let updateMinistries: UpdateMinistriesService;

describe('UpdateMinistries', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();

    updateMinistries = new UpdateMinistriesService(fakeMinistriesRepository);
  });

  it('should be able to update the Ministry', async () => {
    await fakeMinistriesRepository.create({
      name: 'Karis',
      leaders_id: 'leader-123',
    });

    const updatedMinistry = await updateMinistries.execute({
      name: 'Karis',
      local: 'Igreja Holiness',
    });

    expect(updatedMinistry.local).toBe('Igreja Holiness');
  });
});
