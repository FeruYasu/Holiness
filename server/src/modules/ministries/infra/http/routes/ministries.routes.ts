import { Router } from 'express';

import MinistriesController from '../controllers/MinistriesController';
import MinistriesUsersController from '../controllers/MinistriesUsersControllers';

const ministriesRouter = Router();

const ministriesController = new MinistriesController();
const ministriesUsersController = new MinistriesUsersController();

ministriesRouter.get('/', ministriesController.index);
ministriesRouter.post('/', ministriesController.create);
ministriesRouter.put('/', ministriesController.update);

ministriesRouter.put('/:id', ministriesUsersController.update);

export default ministriesRouter;
