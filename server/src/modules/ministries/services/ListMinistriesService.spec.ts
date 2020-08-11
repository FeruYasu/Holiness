import FakeMinistriesRepository from '@modules/ministries/repositories/fakes/FakeMinistriesRepository';
import ListMinistriesService from './ListMinistriesService';

let fakeMinistriesRepository: FakeMinistriesRepository;
let listMinistriesService: ListMinistriesService;

describe('ListMinistries', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();

    listMinistriesService = new ListMinistriesService(fakeMinistriesRepository);
  });
  it('should show all ministries', async () => {
    const ministry1 = await fakeMinistriesRepository.create({
      name: 'Ministry1',
      leaders: [{ user_id: '123' }],
    });

    const ministry2 = await fakeMinistriesRepository.create({
      name: 'Ministry2',
      leaders: [{ user_id: '321' }],
    });

    const ministryList = await listMinistriesService.execute();

    await expect(ministryList).toEqual([ministry1, ministry2]);
  });
});
