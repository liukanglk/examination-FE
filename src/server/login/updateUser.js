/*
 * @Date 2019/11/5
 * @Description 更新密码
*/

const fetch = require("node-fetch");
exports.updateUser = async (username, password) => {
    try {
        return await fetch(`http://127.0.0.1:8081/rearend_war_exploded/login/updateuser?username=${username}&password=${password}`)
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
}

