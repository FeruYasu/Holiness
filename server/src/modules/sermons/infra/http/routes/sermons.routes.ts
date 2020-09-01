import { Router } from 'express';

import SermonsController from '../controllers/SermonsController';

const sermonsRouter = Router();

const sermonsController = new SermonsController();

sermonsRouter.post('/', sermonsController.create);
sermonsRouter.get('/', sermonsController.index);

export default sermonsRouter;
