import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateTestimonialService from '@modules/testimonials/services/CreateTestimonialService';
import ListTestimonialsService from '@modules/testimonials/services/ListTestimonialsService';
import { classToClass } from 'class-transformer';

export default class TestimonialController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, content, photo, ministry_id } = request.body;

    const user_id = request.user.id;

    const createTestimonial = container.resolve(CreateTestimonialService);

    const ministry = await createTestimonial.execute({
      title,
      content,
      user_id,
      ministry_id,
      photo,
    });

    return response.json(ministry);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTestimonials = container.resolve(ListTestimonialsService);

    const testimonials = await listTestimonials.execute();

    return response.json(classToClass(testimonials));
  }
}
