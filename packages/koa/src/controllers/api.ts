import Koa from 'koa';
import { apiServices } from '@koa/services/api';

// /api
export const index = async (ctx: Koa.Context) => {
  ctx.body = await apiServices.index();
  ctx.response.status = 200;
};

// /api/user/
export const user = {
  // /api/user/
  async index(ctx: Koa.Context) {
    ctx.body = await apiServices.user.index();
    ctx.response.status = 200;
  },

  // /api/user/info
  async userInfo(ctx: Koa.Context) {
    ctx.body = await apiServices.user.userInfo();
    ctx.response.status = 200;
  },
};
