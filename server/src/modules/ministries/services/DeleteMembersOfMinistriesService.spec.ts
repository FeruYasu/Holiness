import FakeMinistriesRepository from '../repositories/fakes/FakeMinistriesRepository';
import DeleteMembersOfMinistriesService from './DeleteMembersOfMinistriesService';

let fakeMinistriesRepository: FakeMinistriesRepository;
let deleteMembersOfMinistriesService: DeleteMembersOfMinistriesService;

describe('Delete Ministries Members', () => {
  beforeEach(() => {
    fakeMinistriesRepository = new FakeMinistriesRepository();
    deleteMembersOfMinistriesService = new DeleteMembersOfMinistriesService(
      fakeMinistriesRepository,
    );
  });

  it('should be able to delete members from a specific ministry', async () => {
    const ministry = await fakeMinistriesRepository.create({
      name: 'Karis',
      leaders: [{ user_id: '123' }],
    });

    ministry.ministries_members = [{ user_id: 'new1' }, { user_id: 'new2' }];

    const updatedMinistryMembers = await deleteMembersOfMinistriesService.execute(
      {
        ministryId: ministry.id,
        members: [{ user_id: 'new1' }],
      },
    );

    await expect(updatedMinistryMembers?.ministries_members).toMatchObject([
      { user_id: 'new2' },
    ]);
  });
});
