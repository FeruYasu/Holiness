import { Router } from 'express';

import MinistriesController from '../controllers/MinistriesController';
import MinistriesLeadersController from '../controllers/MinistriesLeadersControllers';
import MinistriesMembersController from '../controllers/MinistriesMembersController';

const ministriesRouter = Router();

const ministriesController = new MinistriesController();
const ministriesLeadersController = new MinistriesLeadersController();
const ministriesMembersController = new MinistriesMembersController();

ministriesRouter.get('/', ministriesController.index);
ministriesRouter.post('/', ministriesController.create);
ministriesRouter.put('/', ministriesController.update);

ministriesRouter.put('/leaders/:id', ministriesLeadersController.update);
ministriesRouter.post('/members/:id', ministriesMembersController.create);

export default ministriesRouter;
