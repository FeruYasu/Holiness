import { container } from 'tsyringe';
import UpdateMinistriesMembersService from '@modules/ministries/services/AddMembersToMinistriesService';
import { Request, Response } from 'express';

export default class MinistriesMembersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { members } = request.body;
    const { id } = request.params;

    const UpdateMinistriy = container.resolve(UpdateMinistriesMembersService);

    const ministry = await UpdateMinistriy.execute({
      ministryId: id,
      members,
    });

    return response.json(ministry);
  }
}
