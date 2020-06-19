import AppError from '@shared/errors/AppError';

import FakeMinistriesRepository from '../repositories/fakes/FakeMinistriesRepository';
import CreateMinistriesService from './CreateMinistriesService';

describe('CreateMinistries', () => {
  it('should be able to create a new Ministry', async () => {
    const fakeMinistriesRepository = new FakeMinistriesRepository();
    const createMinistry = new CreateMinistriesService(
      fakeMinistriesRepository,
    );

    const ministry = await createMinistry.execute({
      name: 'Karis',
    });

    expect(ministry).toHaveProperty('id');
  });

  it('should not be able to create a new Minitry with same name', async () => {
    const fakeMinistriesRepository = new FakeMinistriesRepository();
    const createMinistry = new CreateMinistriesService(
      fakeMinistriesRepository,
    );

    await createMinistry.execute({
      name: 'Karis',
    });

    expect(
      createMinistry.execute({
        name: 'Karis',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
