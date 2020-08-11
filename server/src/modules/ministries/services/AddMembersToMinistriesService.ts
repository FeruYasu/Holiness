import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import MinistryMembers from '@modules/ministries/infra/typeorm/entities/MinistryMembers';
import IMinistrieRepository from '../repositories/IMinistriesRepository';
import Ministry from '../infra/typeorm/entities/Ministry';

interface IRequest {
  ministryId: string;
  members: Partial<MinistryMembers>[];
}

@injectable()
class AddMembersToMinistriesService {
  constructor(
    @inject('MinistriesRepository')
    private ministriesRepository: IMinistrieRepository,
  ) {}

  public async execute({
    ministryId,
    members,
  }: IRequest): Promise<Ministry | undefined> {
    const ministry = await this.ministriesRepository.findById(ministryId);

    if (ministry) {
      console.log(ministry);
      members.forEach(memberId => {
        const membercheck = ministry.ministries_members.find(
          member => member.user_id === memberId.user_id,
        );

        if (!membercheck) {
          ministry.ministries_members.push(memberId);
        }
      });

      this.ministriesRepository.save(ministry);
    } else {
      throw new AppError('User ID or Ministry not found');
    }

    return ministry;
  }
}

export default AddMembersToMinistriesService;
