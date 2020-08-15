import FakeMinistriesRepository from '@modules/ministries/repositories/fakes/FakeMinistriesRepository';

import ListMinistryByIdService from './ListMinistryByIdService';

let listMinistryByIdService: ListMinistryByIdService;

let fakeMinistriesRepository: FakeMinistriesRepository;

describe('ListDeliveryById', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();

    listMinistryByIdService = new ListMinistryByIdService(
      fakeMinistriesRepository,
    );
  });

  it('should be able to list 1 courier by ID', async () => {
    const ministry1 = await fakeMinistriesRepository.create({
      name: 'Ministry1',
      leaders: [{ user_id: '123' }],
    });

    await fakeMinistriesRepository.create({
      name: 'Ministry2',
      leaders: [{ user_id: '222' }],
    });

    const justOneMinistry = await listMinistryByIdService.execute(ministry1.id);

    expect(justOneMinistry).toEqual(ministry1);
  });
});
