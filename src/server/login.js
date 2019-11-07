const fetch = require("node-fetch");

//新增用户
const addUser = async (username, password) => {
    try {
        return await fetch(`http://127.0.0.1:8081/examination_RE_war_exploded/login/adduser?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(istrue => {
                if (istrue.success === 1) {
                    return true;
                } else {
                    return false;
                }
            });
    } catch (e) {
        console.log(e);
    }
};

//用户登录
const judgeUser = async (username, password) => {
    try {
        return await fetch(`http://127.0.0.1:8081/examination_RE_war_exploded/login/finduser?username=${username}`)
            .then(res => res.json())
            .then(users => {
                let userInfo = users.rows[0];
                let userSignal = "";
                if (users.totals === 0) {
                    userSignal = "errorUser";
                } else if (users.totals === 1 && userInfo.password !== password) {
                    userSignal = "errorPassword"
                } else {
                    userSignal = "success";
                }
                return userSignal;
            });
    } catch (e) {
        console.log(e);
    }
};


//修改密码
const updateUser = async (username, password) => {
    try {
        return await fetch(`http://127.0.0.1:8081/examination_RE_war_exploded/login/updateuser?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(istrue => {
                if (istrue.success === 1) {
                    return true;
                } else {
                    return false;
                }
            });
    } catch (e) {
        console.log(e);
    }
};


module.exports = {addUser, judgeUser, updateUser};