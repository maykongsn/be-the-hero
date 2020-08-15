import { Router } from 'express';

import OngController from './app/controllers/OngController';

const routes = new Router();

routes.post('/ongs', OngController.store);

export default routes;
