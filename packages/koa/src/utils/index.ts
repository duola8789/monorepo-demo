import { RouteItem } from '@koa/types';
import KoaRouter from 'koa-router';

export const renderRoutes = (routes: RouteItem[]) => {
  const router = new KoaRouter();
  routes.forEach(route => {
    router[route.method](route.path, route.action);
  });
  return router;
};
