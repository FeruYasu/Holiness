import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AnnouncementsController from '../controllers/AnnouncementsController';

const announcementsRouter = Router();

const announcementsController = new AnnouncementsController();

announcementsRouter.post(
  '/',
  ensureAuthentication,
  announcementsController.create,
);

export default announcementsRouter;
