import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Testimonial from '../infra/typeorm/entities/Testimonial';
import ITestimonialsRepository from '../repositories/ITestimonialsRepository';

interface IRequest {
  testimonialId: string;
  emoji: number;
  userId: string;
}

@injectable()
class ToogleEmojiOfTestimonialService {
  constructor(
    @inject('TestimonialsRepository')
    private testimonialsRepository: ITestimonialsRepository,
  ) {}

  public async execute({
    testimonialId,
    emoji,
    userId,
  }: IRequest): Promise<Testimonial> {
    const testimonial = await this.testimonialsRepository.findById(
      testimonialId,
    );

    if (!testimonial) {
      throw new AppError('User not found');
    }

    if (emoji === 1) {
      const index = testimonial.emoji1.findIndex(value => value === userId);
      if (index !== -1) {
        testimonial.emoji1.splice(index, 1);
      } else {
        testimonial.emoji1.push(userId);
      }
    }

    const updateTestimonial = await this.testimonialsRepository.save(
      testimonial,
    );

    return updateTestimonial;
  }
}

export default ToogleEmojiOfTestimonialService;
