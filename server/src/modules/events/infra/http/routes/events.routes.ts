import { Router } from 'express';

import EventsController from '../controllers/EventsController';
import EventsMinistriesController from '../controllers/EventsMinistriesController';

const eventsRouter = Router();

const eventsController = new EventsController();
const eventsMinistriesController = new EventsMinistriesController();

eventsRouter.post('/', eventsController.create);
eventsRouter.post('/ministries', eventsMinistriesController.create);

export default eventsRouter;
