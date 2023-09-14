import KoaRouter from 'koa-router';
import { homeRouter } from '@koa/routes/home';
import { apiRouter } from '@koa/routes/api';

export const router = new KoaRouter();

router.use('/', homeRouter.routes());
router.use('/api', apiRouter.routes());
