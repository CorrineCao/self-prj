import Koa from 'koa';
import Route from 'koa-route';
import bodyParser from 'koa-bodyparser';
import { entryController } from './controllers/homepage';
import path from 'path';

const app = new Koa();
app.use(bodyParser());

const port = process.env.PORT || 3000;
app.rootDir = path.resolve(__dirname, '../../');
// app.tokenCookieName = 'ljzc_token';
// app.proxy = ['test', 'off', 'production'].includes(process.env.NODE_ENV);

app.use(
  Route.get('/it/ping', ctx => {
    ctx.status = 200;
    ctx.body = 'OK';
  }),
);

app.use(
  Route.get('/favicon.ico', ctx => {
    ctx.status = 200;
    ctx.body = '';
  }),
);

app.use(
  Route.get('/too-many-redirects', async ctx => {
    ctx.body = '出错了，登陆失败，尝试登陆失败次数太多';
    ctx.status = 200;
    return;
  }),
);

/* pc site pages */
// app.use(Route.get('/login', loginController));
/* UC server callback */
// app.use(Route.post('/login', desctoryTokenController));
// app.use(Route.get('/logout', logoutController));
// app.use(Route.get('/upload/*', uploadController));
app.use(Route.get('/test', async (ctx) => {
  ctx.body = 'ok';
  ctx.status = 200;
}));

app.use(Route.get('/*', entryController));

app.listen(port);

app.on('error', error => {
  console.error(error);
});

app.on('uncaughtException', error => {
  console.error(error);
});
