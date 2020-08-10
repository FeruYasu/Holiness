import { injectable, inject } from 'tsyringe';
import IMinistriesRepository from '../repositories/IMinistriesRepository';
import Ministry from '../infra/typeorm/entities/Ministry';
import MinistryMembers from '../infra/typeorm/entities/MinistryMembers';

interface IRequest {
  ministryId: string;
  membersId: MinistryMembers[];
}
@injectable()
class AddMembersToMinistryService {
  constructor(
    @inject('MinistriesRepository')
    private ministriesRepository: IMinistriesRepository,
  ) {}

  public async execute({
    ministryId,
    membersId,
  }: IRequest): Promise<Ministry | undefined> {
    const ministry = await this.ministriesRepository.findById(ministryId);

    if (ministry) {
      ministry.ministries_members = membersId;
      this.ministriesRepository.save(ministry);
    }

    return ministry;
  }
}

export default AddMembersToMinistryService;
