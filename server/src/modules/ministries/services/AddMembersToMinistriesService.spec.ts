import FakeMinistriesRepository from '../repositories/fakes/FakeMinistriesRepository';
import AddMembersToMinistriesService from './AddMembersToMinistriesService';

let fakeMinistriesRepository: FakeMinistriesRepository;
let addMembersToMinistriesService: AddMembersToMinistriesService;

describe('Add Ministries Members', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();
    addMembersToMinistriesService = new AddMembersToMinistriesService(
      fakeMinistriesRepository,
    );
  });

  it('should be able to add members to a specific ministry', async () => {
    const ministry = await fakeMinistriesRepository.create({
      name: 'Karis',
      leaders: [{ user_id: '123' }],
    });

    ministry.ministries_members = [];

    const updatedMinistryMembers = await addMembersToMinistriesService.execute({
      ministryId: ministry.id,
      members: [{ user_id: 'new1' }, { user_id: 'new2' }],
    });

    await expect(updatedMinistryMembers?.ministries_members).toMatchObject([
      { user_id: 'new1' },
      { user_id: 'new2' },
    ]);
  });
});
