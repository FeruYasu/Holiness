import { Repository, getRepository } from 'typeorm';
import IAnnouncementRepository from '@modules/announcements/repositories/IAnnouncementsRepository';
import Announcement from '../entities/Announcement';

interface IRequest {
  title: string;
  content: string;
  user_id: string;
  image?: string;
  video?: string;
  link?: string;
  event_id?: string;
}

class AnnouncementRepository implements IAnnouncementRepository {
  private ormRepository: Repository<Announcement>;

  constructor() {
    this.ormRepository = getRepository(Announcement);
  }

  public async save(announcement: Announcement): Promise<Announcement> {
    return this.ormRepository.save(announcement);
  }

  public async create({
    title,
    content,
    user_id,
    image,
    video,
    link,
    event_id,
  }: IRequest): Promise<Announcement> {
    const announcement = this.ormRepository.create({
      title,
      content,
      user_id,
      image,
      video,
      link,
      event_id,
    });

    await this.ormRepository.save(announcement);

    return announcement;
  }
}

export default AnnouncementRepository;
