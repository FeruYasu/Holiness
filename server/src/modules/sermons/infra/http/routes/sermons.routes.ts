import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import SermonsController from '../controllers/SermonsController';
import SermonsThumbnailController from '../controllers/SermonsThumbnailController';

const upload = multer(uploadConfig.multer);

const sermonsRouter = Router();

const sermonsController = new SermonsController();
const sermonsThumbnailController = new SermonsThumbnailController();

sermonsRouter.post('/', sermonsController.create);
sermonsRouter.get('/', sermonsController.index);

sermonsRouter.put(
  '/thumbnail/:id',
  upload.single('thumbnail'),
  sermonsThumbnailController.update,
);

export default sermonsRouter;
