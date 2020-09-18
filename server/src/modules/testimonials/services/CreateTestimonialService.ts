import { injectable, inject } from 'tsyringe';
import ITestimonialsRepository from '../repositories/ITestimonialsRepository';

import ICreateTestimonialDTO from '../dtos/ICreateTestimonialDTO';
import Testimonial from '../infra/typeorm/entities/Testimonial';

@injectable()
class CreateTestimonialService {
  constructor(
    @inject('TestimonialsRepository')
    private testimonialRepository: ITestimonialsRepository,
  ) {}

  public async execute(data: ICreateTestimonialDTO): Promise<Testimonial> {
    const testimonial = await this.testimonialRepository.create(data);

    return testimonial;
  }
}

export default CreateTestimonialService;
