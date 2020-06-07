import { Router } from 'express';

import usersRouter from './users.routes';
import ministriesRouter from './ministries.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/ministries', ministriesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
