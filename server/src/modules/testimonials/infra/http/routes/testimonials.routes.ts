import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

import TestimonialsController from '../controllers/TestimonialsController';
import TestimonialsPhotosController from '../controllers/TestimonialsPhotosController';
import EmojisController from '../controllers/EmojisController';

const testimonialsRouter = Router();

const testimonialsController = new TestimonialsController();
const testimonialsPhotosController = new TestimonialsPhotosController();
const emojisController = new EmojisController();

const upload = multer(uploadConfig.multer);

testimonialsRouter.use(ensureAuthentication);
testimonialsRouter.post('/', testimonialsController.create);
testimonialsRouter.get('/', testimonialsController.index);
testimonialsRouter.put('/:id', testimonialsController.update);

testimonialsRouter.patch(
  '/photo/:id',
  upload.single('photo'),
  testimonialsPhotosController.update,
);

testimonialsRouter.put('/emoji/:id', emojisController.update);

export default testimonialsRouter;
