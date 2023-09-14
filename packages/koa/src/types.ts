import Router from 'koa-router';

export interface RouteItem {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  action: Router.IMiddleware;
}
