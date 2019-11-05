const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();
const fetch = require("node-fetch");
const getUser = require("../login/judgeUser");
const addUser = require("../login/addUser");
const updateUser = require("../login/updateUser");

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


const judgeUser = async ctx => {
    try {
        let query = ctx.query;
        let isUser = await getUser.judgeUser(query.username, query.password);
        ctx.body = isUser;
    } catch (e) {
        console.log(e);
    }

};

const add = async ctx => {
    try {
        let query = ctx.query;
        let isAddSuccess = await addUser.addUser(query.username, query.password);
        ctx.body = isAddSuccess;
    } catch (e) {
        console.log(e);
    }
};

const update = async ctx => {
    try {
        let query = ctx.query;
        let isAddSuccess = await updateUser.updateUser(query.username, query.password);
        ctx.body = isAddSuccess;
    } catch (e) {
        console.log(e);
    }
};


app.use(route.get('/judgeuser', judgeUser));
app.use(route.get('/adduser', add));
app.use(route.get('/updateuser', update));


app.listen(3000, () => {
        console.log('server is running at http://localhost:3000');
    }
);
