import { Router } from 'express';

import EnsureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import EventsController from '../controllers/EventsController';
import EventsMinistriesController from '../controllers/EventsMinistriesController';
import EventsParticipantsController from '../controllers/EventsParticipantsController';

const eventsRouter = Router();

const eventsController = new EventsController();
const eventsMinistriesController = new EventsMinistriesController();
const eventsParticipantsController = new EventsParticipantsController();

eventsRouter.use(EnsureAuthentication);
eventsRouter.post('/', eventsController.create);
eventsRouter.get('/', eventsController.index);
eventsRouter.get('/:id', eventsController.show);

eventsRouter.post('/ministries', eventsMinistriesController.create);

eventsRouter.post('/participants', eventsParticipantsController.create);
eventsRouter.delete('/participants', eventsParticipantsController.destroy);

export default eventsRouter;
