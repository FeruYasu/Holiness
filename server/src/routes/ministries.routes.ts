import { Router } from 'express';
import CreateMinistriesService from '../services/CreateMinistriesService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const ministriesRouter = Router();

ministriesRouter.use(ensureAuthenticated);

ministriesRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createMinistry = new CreateMinistriesService();

  const ministry = await createMinistry.execute({ name });

  return response.json(ministry);
});

export default ministriesRouter;
