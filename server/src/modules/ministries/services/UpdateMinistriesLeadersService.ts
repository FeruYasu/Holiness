import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import MinistryLeaders from '@modules/ministries/infra/typeorm/entities/MinistryLeaders';
import IMinistrieRepository from '../repositories/IMinistriesRepository';
import Ministry from '../infra/typeorm/entities/Ministry';

interface IRequest {
  ministryId: string;
  leaders: Partial<MinistryLeaders>[];
}

@injectable()
class UpdateMinistriesLeadersService {
  constructor(
    @inject('MinistriesRepository')
    private ministriesRepository: IMinistrieRepository,
  ) {}

  public async execute({
    ministryId,
    leaders,
  }: IRequest): Promise<Ministry | undefined> {
    const ministry = await this.ministriesRepository.findById(ministryId);

    if (ministry) {
      ministry.ministries_leaders = leaders;
      this.ministriesRepository.save(ministry);
    } else {
      throw new AppError('User ID or Ministry not found');
    }

    return ministry;
  }
}

export default UpdateMinistriesLeadersService;
