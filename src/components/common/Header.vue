<template>
    <div id="header">
        <p id="welcome">欢迎进入</p>
        <div class="header-login">
            <el-dropdown>
                <el-button type="primary">
                    {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ["username"],
        data() {
            return {
                userName: this.username
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/common/css/init.css";

    #header {
        background: antiquewhite;
        .header-login {
            float: right;
        }
        #welcome {
            font-size: x-large;
        }
    }

</style>