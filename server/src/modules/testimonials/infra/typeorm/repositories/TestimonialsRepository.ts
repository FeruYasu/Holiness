import { Repository, getRepository } from 'typeorm';
import ITestimonialRepository from '@modules/testimonials/repositories/ITestimonialsRepository';
import Testimonial from '../entities/Testimonial';
import ICreateTestimonialDTO from '../../../dtos/ICreateTestimonialDTO';

class TestimonialsRepository implements ITestimonialRepository {
  private ormRepository: Repository<Testimonial>;

  constructor() {
    this.ormRepository = getRepository(Testimonial);
  }

  public async save(testimonial: Testimonial): Promise<Testimonial> {
    return this.ormRepository.save(testimonial);
  }

  public async create({
    title,
    content,
    photo,
    user_id,
    ministry_id,
  }: ICreateTestimonialDTO): Promise<Testimonial> {
    const testimonial = this.ormRepository.create({
      title,
      content,
      photo,
      user_id,
      ministry_id,
      emoji1: ['123', '456'],
    });

    await this.ormRepository.save(testimonial);

    return testimonial;
  }

  public async listAll(): Promise<Testimonial[]> {
    const testimonials = await this.ormRepository.find({
      relations: ['user', 'ministry'],
    });

    return testimonials;
  }

  public async findById(id: string): Promise<Testimonial | undefined> {
    const testimonial = await this.ormRepository.findOne({ where: { id } });

    return testimonial;
  }
}

export default TestimonialsRepository;
