import { Router } from 'express';
import MinistriesController from '../controllers/MinistriesController';

const ministriesRouter = Router();
const ministriesController = new MinistriesController();

ministriesRouter.post('/', ministriesController.create);
ministriesRouter.put('/', ministriesController.update);

export default ministriesRouter;
