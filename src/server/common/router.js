const login = require("./../login");
const Koa = require('koa');
const app = new Koa();

const loginRouter = {
    judgeUser: async ctx => {
        try {
            let query = ctx.query;
            console.log(query.username, query.password, "query");
            let isUser = await login.judgeUser(query.username, query.password);
            ctx.body = isUser;
        } catch (e) {
            console.log(e);
        }
    },


    addUser: async ctx => {
        try {
            let query = ctx.query;
            let isAddSuccess = await login.addUser(query.username, query.password);
            ctx.body = isAddSuccess;
        } catch (e) {
            console.log(e);
        }
    },

    updateUser: async ctx => {
        try {
            let query = ctx.query;
            let isUpdateSuccess = await login.updateUser(query.username, query.password);
            ctx.body = isUpdateSuccess;
        } catch (e) {
            console.log(e);
        }

    },

    findUser: async ctx => {
        try {
            let query = ctx.query;
            let isFindSuccess = await login.findUser();
            ctx.body = isFindSuccess;
        } catch (e) {
            console.log(e);
        }
    }
};


module.exports = {loginRouter};