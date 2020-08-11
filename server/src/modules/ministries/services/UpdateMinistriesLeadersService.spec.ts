import FakeMinistriesRepository from '../repositories/fakes/FakeMinistriesRepository';
import UpdateMinistryLeadersService from './UpdateMinistriesLeadersService';

let fakeMinistriesRepository: FakeMinistriesRepository;
let updateMinistryLeadersService: UpdateMinistryLeadersService;

describe('Update Ministries Leaders', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();
    updateMinistryLeadersService = new UpdateMinistryLeadersService(
      fakeMinistriesRepository,
    );
  });

  it('should be able to update the leader of a specific ministry', async () => {
    const ministry = await fakeMinistriesRepository.create({
      name: 'Karis',
      leaders: [{ user_id: '123' }],
    });

    const updatedMinistryLeaders = await updateMinistryLeadersService.execute({
      ministryId: ministry.id,
      leaders: [{ user_id: 'new1' }, { user_id: 'new2' }],
    });

    await expect(updatedMinistryLeaders?.ministries_leaders).toMatchObject([
      { user_id: 'new1' },
      { user_id: 'new2' },
    ]);
  });
});
