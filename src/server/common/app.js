const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();
const path = require("./path")

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});

let loginPath = path.login;
for (let lp in loginPath) {
    app.use(route.get(lp, loginPath[lp]));
}


app.listen(3000, () => {
        console.log('server is running at http://localhost:3000');
    }
);
