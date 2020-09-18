import Testimonial from '../infra/typeorm/entities/Testimonial';
import ICreateAnnouncementDTO from '../dtos/ICreateTestimonialDTO';

export default interface ITestimonialsRepository {
  save(data: Testimonial): Promise<Testimonial>;
  create(data: ICreateAnnouncementDTO): Promise<Testimonial>;
  listAll(): Promise<Testimonial[]>;
}
