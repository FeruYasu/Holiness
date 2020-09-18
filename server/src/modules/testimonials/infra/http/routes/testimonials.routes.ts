import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TestimonialsController from '../controllers/TestimonialsController';

const testimonialsRouter = Router();

const testimonialsController = new TestimonialsController();

testimonialsRouter.use(ensureAuthentication);
testimonialsRouter.post('/', testimonialsController.create);
// testimonialsRouter.get('/', testimonialsController.index);

export default testimonialsRouter;
