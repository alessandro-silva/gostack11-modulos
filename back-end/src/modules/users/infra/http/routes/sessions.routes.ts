import { Router } from 'express';

import SessiosController from '../controllers/SessionsController';

const sessionsController = new SessiosController();

const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
