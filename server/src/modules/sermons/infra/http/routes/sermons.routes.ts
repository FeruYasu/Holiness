import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import SermonsController from '../controllers/SermonsController';

const sermonsRouter = Router();

const sermonsController = new SermonsController();

// const upload = multer(uploadConfig.multer);

sermonsRouter.post('/', sermonsController.create);

// sermonsRouter.put(
//   '/photo/:id',
//   upload.single('photo'),
//   sermonsPhotoController.update,
// );

export default sermonsRouter;
