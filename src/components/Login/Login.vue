<template>
    <div id="login">
        <Header :username="name"/>
        <div id="login-in">
            <p class="login-text">用户名</p>
            <el-input placeholder="请输入用户名" v-model="name" clearable/>

            <p class="login-text">密码</p>
            <el-input placeholder="请输入密码" v-model="password" show-password/>

            <el-button type="primary" round @click="findUser">登录</el-button>
            <el-button @click="preRegister">注册</el-button>
            <el-button @click="preUpdatePassword">修改密码</el-button>
            <el-button @click="allUser">用户名单</el-button>


            <br/>

            <Register :isVisible.sync="registerFormVisable"/>
            <Update :isVisible.sync="updateFormVisible"/>
        </div>

        <el-table
                :data="tableData"
                stripe
                style="width: 100%">

            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>


        <Footer/>

        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "../common/Header";
    import Footer from "../common/Footer";
    import axios from "axios"
    import Register from "./Register";
    import Update from "./Update";


    export default {
        name: "Login",
        components: {Update, Register, Footer, Header},
        data() {
            return {
                tableData: [],
                father: "fa",
                name: "liu",
                password: "1111",
                registerFormVisable: false,
                updateFormVisible: false,
                registerform: {
                    name: '',
                    password: ''
                },
                updateform: {
                    name: "",
                    password: ""
                },
                formLabelWidth: '120px'
            };
        },
        methods: {
            /*
             * @Date 2019/11/4
             * @Description 判断用户登录
            */
            async findUser() {
                if (this.name === "" || this.password === "") {
                    alert("请输入用户名和密码");
                    return;
                }

                try {
                    await axios.get(`http://127.0.0.1:3000/judgeuser?username=${this.name}&password=${this.password}`).then(res => {
                        if (res.data === "errorUser") {
                            alert("该用户不存在");
                            return;
                        } else if (res.data === "errorPassword") {
                            alert("密码错误，请重新输入");
                            return;
                        } else if (res.data === "") {
                            alert("登陆失败")
                        } else {
                            alert("登录成功");
                            this.$router.push('/home')
                        }
                    })
                } catch (e) {
                    console.log(e);
                }
            }
            ,

            preRegister() {
                this.registerFormVisable = true;
            },

            async register() {
                if (this.registeform.name === "" || this.form.password === "") {
                    alert("请输入用户名和密码");
                    return;
                }
                await axios.get(`http://127.0.0.1:3000/adduser?username=${this.form.name}&password=${this.form.password}`)
                    .then(res => {
                        if (res.data === true) {
                            alert("注册成功");
                        } else {
                            alert("注册失败");
                        }
                    })
                this.registerForm = false;
            },

            async allUser() {
                this.tableData = [];
                await axios.get(`http://127.0.0.1:3000/finduser`)
                    .then(res => {
                        // console.log(res);
                        let arrTmp = res.data.rows;
                        arrTmp.forEach(us => {
                            this.tableData.push({
                                name: us.username,
                                address: us.password
                            })
                        })
                    })
            },
            preUpdatePassword() {
                this.updateFormVisible = true;
            },

            async updatePassword() {
                await axios.get(`http://127.0.0.1:3000/adduser?username=${this.form.name}&password=${this.form.password}`)
                    .then(res => {
                        console.log(res);
                    })
            },
            formatter(row, column) {
                return row.address;
            }
        }
    }

</script>

<style scoped lang="scss">
    #login {
        .login-text {
            color: red;
        }


    }


</style>