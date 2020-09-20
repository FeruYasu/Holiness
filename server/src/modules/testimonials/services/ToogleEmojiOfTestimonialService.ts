import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Testimonial from '../infra/typeorm/entities/Testimonial';
import ITestimonialsRepository from '../repositories/ITestimonialsRepository';

interface IRequest {
  testimonialId: string;
  emoji: number;
  userId: string;
}

interface IEmojiKeys {
  emoji1: string[];
  emoji2: string[];
  emoji3: string[];
  emoji4: string[];
  emoji5: string[];
  emoji6: string[];
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
      throw new AppError('Testimonial not found');
    }

    for (let key = 1; key <= 6; key += 1) {
      const emojiKey: keyof IEmojiKeys = `emoji${key}`;

      const index = testimonial[emojiKey].findIndex(value => value === userId);
      if (index !== -1) {
        testimonial[emojiKey].splice(index, 1);
      }
    }

    const newKey: keyof IEmojiKeys = `emoji${emoji}`;
    testimonial[newKey].push(userId);

    const updateTestimonial = await this.testimonialsRepository.save(
      testimonial,
    );

    return updateTestimonial;
  }
}

export default ToogleEmojiOfTestimonialService;
