import { RouteItem } from '@koa/types';
const { homeController } = require('../controllers');
import { renderRoutes } from '@koa/utils';

export const homeRoutes: RouteItem[] = [{ path: '/', method: 'get', action: homeController.home.index }];

export const homeRouter = renderRoutes(homeRoutes);
