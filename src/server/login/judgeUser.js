/*
 * @Date 2019/11/4
 * @Description 获取后端数据
*/
const fetch = require("node-fetch");
exports.judgeUser = async (username, password) => {
    try {
        return await fetch(`http://127.0.0.1:8081/rearend_war_exploded/login/finduser?username=${username}`)
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
}


