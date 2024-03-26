import Koa from 'koa';
import { apiServices } from '@koa/services/api';

let timer: ReturnType<typeof setInterval>;

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

  // /api/events/start
  async eventsStart(ctx: Koa.Context) {
    if (ctx.sse) {
      console.log('eventsStart');
      timer = setInterval(() => {
        ctx.sse?.send(new Date().toLocaleString());
      }, 2000);
      ctx.response.status = 200;
    }
  },
  // /api/eventsStop
  async eventsStop(ctx: Koa.Context) {
    if (ctx.sse) {
      ctx.sse.on('finish', () => {
        ctx.sse?.end('finish');
        clearInterval(timer);
      });
      ctx.response.status = 200;
    }
  },
};
