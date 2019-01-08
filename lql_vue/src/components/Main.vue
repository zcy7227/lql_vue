<template>
    <div>
        <h1>主页面</h1>
        欢迎你!
        <span v-if="UserDto">{{UserDto.roleName}}:{{UserDto.userName}}
            <el-button type="warning"  @click="login">注销</el-button><br>
            <h3>用户信息</h3>
            <el-form :model="UserDto">
                <el-form-item label="用户名">
                    <el-input v-model="UserDto.userName"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="UserDto.userEmail" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="UserDto.userPassword"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="UserDto.userSex"></el-input>
                </el-form-item>
                <el-form-item label="民族">
                    <el-input v-model="UserDto.userNation"></el-input>
                </el-form-item>
                <el-form-item label="用户角色">
                    <el-input v-model="UserDto.roleName"></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-input v-model="UserDto.createBy" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
        </span>
        <el-button v-else type="success" @click="login">点击登录</el-button>
    </div>
</template>

<script>
    import ElTableHeader from "element-ui/lib/table";
    export default {
        components: {ElTableHeader},
        data: {
          UserList: undefined
        },
        methods: {
            login () {
                this.$router.replace('/login')
            },
            logout () {
                this.$store.dispatch('logout').then(() => {
                    this.$router.replace('/login')
                })
            },
        },
        computed: {
            UserDto () {
                return this.$store.state.UserDto
            }
        }
    }
</script>