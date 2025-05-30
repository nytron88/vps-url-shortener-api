import { Router } from 'express';
const routes = Router();

import { Shorter, Redirect } from './controllers/urlController';

routes.post('/shorter', Shorter);
routes.get("/:hash", Redirect);

export default routes;