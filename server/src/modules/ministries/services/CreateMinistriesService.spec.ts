import AppError from '@shared/errors/AppError';

import FakeMinistriesRepository from '../repositories/fakes/FakeMinistriesRepository';
import CreateMinistriesService from './CreateMinistriesService';

let fakeMinistriesRepository: FakeMinistriesRepository;
let createMinistry: CreateMinistriesService;

describe('CreateMinistries', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();
    createMinistry = new CreateMinistriesService(fakeMinistriesRepository);
  });

  it('should be able to create a new Ministry', async () => {
    const ministry = await createMinistry.execute({
      name: 'Karis',
      leaders_id: 'leader-123',
    });

    expect(ministry).toHaveProperty('id');
  });

  it('should not be able to create a new Minitry with same name', async () => {
    await createMinistry.execute({
      name: 'Karis',
      leaders_id: 'leader-123',
    });

    expect(
      createMinistry.execute({
        name: 'Karis',
        leaders_id: 'leader-0',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
