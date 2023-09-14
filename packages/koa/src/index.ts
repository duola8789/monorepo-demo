import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { router } from '@koa/routes';
import { PORT } from '@koa/config';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
