import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ToogleEmojiOfTestimonialService from '@modules/testimonials/services/ToogleEmojiOfTestimonialService';

export default class TestimonialController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { emoji } = request.body;
    const userId = request.user.id;

    const { id } = request.params;

    const toogleEmoji = container.resolve(ToogleEmojiOfTestimonialService);

    const testimonial = await toogleEmoji.execute({
      testimonialId: id,
      emoji,
      userId,
    });

    return response.json(testimonial);
  }
}
