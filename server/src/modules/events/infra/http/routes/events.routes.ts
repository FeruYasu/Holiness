import { Router } from 'express';

import EventsController from '../controllers/EventsController';

const eventsRouter = Router();

const eventsController = new EventsController();

eventsRouter.post('/', eventsController.create);

export default eventsRouter;
