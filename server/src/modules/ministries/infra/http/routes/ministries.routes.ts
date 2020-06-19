import { Router } from 'express';
import CreateMinistriesService from '@modules/ministries/services/CreateMinistriesService';

const ministriesRouter = Router();

ministriesRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createMinistry = new CreateMinistriesService();

  const ministry = await createMinistry.execute({ name });

  return response.json(ministry);
});

export default ministriesRouter;
