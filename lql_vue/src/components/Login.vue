<template>
    <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="UserDto" :rules="rules" label-width="80px">
            <el-form-item label="邮箱" prop="userEmail">
                <el-input v-model="UserDto.userEmail"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPassword">
                <el-input v-model="UserDto.userPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    export default {
        methods: {
            login() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/login', this.UserDto).then((res) => {
                            if (res.data.code === 200) {
                                this.$store.dispatch('login', res.data).then(() => {
                                    this.$store.state.UserDto = res.data.data;
                                    this.$notify({
                                        type: 'success',
                                        message: '欢迎你,' + res.data.data.userName + '!',
                                        duration: 3000
                                    })
                                    this.$router.replace('/')
                                })
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '用户名或密码错误',
                                    showClose: true
                                })
                            }
                        }).catch((err) => {
                            this.$message({
                                type: 'error',
                                message: '网络错误，请重试',
                                showClose: true
                            })
                        })
                    }
                    else {
                        return false
                    }
                })
            }
        },
        data () {
            return {
                UserDto: {},
                rules: {
                    userEmail: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'}
                    ],
                    userPassword: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>