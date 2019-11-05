<template>
    <div class="update">
        <el-dialog title="修改密码" :visible="isVisible" :before-close="handleClose">
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="quitUpdate">取 消</el-button>
                <el-button type="primary" @click="updatePassword">确 定</el-button>
            </div>
        </el-dialog>

    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "Update",
        props: ['isVisible'],
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                },
                formLabelWidth: '120px'
            };
        },
        methods: {
            quitUpdate() {
                this.$emit("update:isVisible", false);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$emit("update:isVisible", false);
                        done();
                    })
                    .catch(_ => {
                    });
            },
            async updatePassword() {
                if (this.form.name === "" || this.form.password === "") {
                    alert("请输入用户名和密码");
                    return;
                }
                await axios.get(`http://127.0.0.1:3000/updateuser?username=${this.form.name}&password=${this.form.password}`)
                    .then(res => {
                        if (res.data === true) {
                            alert("修改成功");
                            this.$emit("update:isVisible", false);
                        } else {
                            alert("修改失败");
                        }
                    })
            },

        }
    }
</script>

<style lang="scss" scoped>

</style>