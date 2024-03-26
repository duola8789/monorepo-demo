import { RouteItem } from '@koa/types';
const { apiController } = require('../controllers');
import { renderRoutes } from '@koa/utils';

export const apiRoutes: RouteItem[] = [
  { path: '/', method: 'get', action: apiController.index },
  { path: '/user', method: 'get', action: apiController.user.index },
  { path: '/user/info', method: 'get', action: apiController.user.userInfo },
  { path: '/events/start', method: 'get', action: apiController.user.eventsStart },
  { path: '/events/stop', method: 'get', action: apiController.user.eventsStop },
];

export const apiRouter = renderRoutes(apiRoutes);
