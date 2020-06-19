import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import ministriesRouter from '@modules/ministries/infra/http/routes/ministries.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/ministries', ministriesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
