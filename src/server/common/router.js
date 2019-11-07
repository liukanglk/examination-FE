const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();


app.use(route.get('/judgeuser', judgeUser));
app.use(route.get('/adduser', add));
app.use(route.get('/updateuser', update));

const routerPath = {
    "/judeguser": judgeUser,
    '/adduser': add,
    '/updateuser': update
}
