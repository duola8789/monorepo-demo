import Koa from 'koa';
import { homeServices } from '@koa/services/home';

export const home = {
  async index(ctx: Koa.Context) {
    ctx.body = await homeServices.home.index();
    ctx.response.status = 200;
  },
};
