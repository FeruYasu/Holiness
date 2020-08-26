import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateAnnouncementService from '@modules/announcements/services/CreateAnnouncementService';

export default class AnnouncementController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, content, image, video, link, event_id } = request.body;

    const user_id = request.user.id;

    const createAnnouncement = container.resolve(CreateAnnouncementService);

    const ministry = await createAnnouncement.execute({
      title,
      content,
      user_id,
      image,
      video,
      link,
      event_id,
    });

    return response.json(ministry);
  }
}
