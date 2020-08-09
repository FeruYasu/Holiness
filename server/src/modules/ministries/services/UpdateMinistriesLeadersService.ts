import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IMinistrieRepository from '../repositories/IMinistriesRepository';
import ministriesRouter from '../infra/http/routes/ministries.routes';

interface IRequest {
  ministryId: string;
  leadersId: string[];
}

@injectable()
class UpdateMinistriesLeadersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MinistriesRepository')
    private ministriesRepository: IMinistrieRepository,
  ) {}

  public async execute({
    ministryId,
    leadersId,
  }: IRequest): Promise<User[] | undefined> {
    const usersID = await this.usersRepository.findByIds(leadersId);
    const ministry = await this.ministriesRepository.findById(ministryId);

    if (usersID && ministry) {
      // for (let index = 0; index < usersID.length; index += 1) {
      //   ministry.ministries_leaders = [{ user_id: 'oi'. mini }];
      //   ministry.ministries_leaders = { user_id: leadersId[index] };
      // }

      ministry.ministries_leaders = [{ user_id: '1' }];

      this.ministriesRepository.save(ministry);
    } else {
      throw new AppError('User ID or Ministry not found');
    }

    return usersID;
  }
}

export default UpdateMinistriesLeadersService;
