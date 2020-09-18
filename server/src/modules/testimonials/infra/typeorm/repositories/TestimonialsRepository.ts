import { Repository, getRepository } from 'typeorm';
import ITestimonialRepository from '@modules/testimonials/repositories/ITestimonialsRepository';
import Testimonial from '../entities/Testimonial';
import ICreateTestimonialDTO from '../../../dtos/ICreateTestimonialDTO';

class TestimonialsRepository implements ITestimonialRepository {
  private ormRepository: Repository<Testimonial>;

  constructor() {
    this.ormRepository = getRepository(Testimonial);
  }

  public async save(announcement: Testimonial): Promise<Testimonial> {
    return this.ormRepository.save(announcement);
  }

  public async create({
    title,
    content,
    photo,
    user_id,
    ministry_id,
  }: ICreateTestimonialDTO): Promise<Testimonial> {
    const announcement = this.ormRepository.create({
      title,
      content,
      photo,
      user_id,
      ministry_id,
    });

    await this.ormRepository.save(announcement);

    return announcement;
  }

  public async listAll(): Promise<Testimonial[]> {
    const testimonials = await this.ormRepository.find({
      relations: ['user', 'ministry'],
    });

    return testimonials;
  }
}

export default TestimonialsRepository;
