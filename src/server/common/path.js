const router = require("./router");

const path = {
    login: {
        "/adduser": router.loginRouter.addUser,
        "/judgeuser": router.loginRouter.judgeUser,
        "/updateuser": router.loginRouter.updateUser,
        "/finduser":router.loginRouter.findUser
    }
};


module.exports = path;