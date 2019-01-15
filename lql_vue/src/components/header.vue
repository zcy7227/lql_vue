<template>
  <div>
    <div class="images">
      <P><img @click="back" class="logo" src="../assets/gen.svg"></P>
    </div>
    <div class="navMenu" style="width: 100%; ">
      <el-menu :default-active="activeIndex" @select="handleSelect" background-color="#138eed" class="el-menu-demo"
               mode="horizontal" router="true" style="text-align:center;" text-color="#fff">
        <el-menu-item index="part1" style="margin-left: 35%">部分一</el-menu-item>
        <el-menu-item index="part2">部分二</el-menu-item>
        <el-menu-item index="part3">部分三</el-menu-item>
        <el-menu-item index="part4">部分四</el-menu-item>
        <el-submenu index="5" style="margin-left: 30%">
          <template slot="title"><i class="el-icon-setting" style="color: #fff"></i></template>
          <el-menu-item index="person">修改个人信息</el-menu-item>
          <el-menu-item index="admin">修改</el-menu-item>
          <el-menu-item index="edit">修改文本</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item disabled index="3">消息中心</el-menu-item>
        <el-button @click="dialogFormVisible = true" style="float: right;margin-right: 15px;margin-top: 10px"
                   type="text">登录
        </el-button>
      </el-menu>

    </div>
    <div class="methods" style="width: 20%">
      <!-- Form -->

      <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible">
        <div>
          <img src="../assets/login.png" style="float: left">
          <el-tabs @tab-click="handleClick" style="margin-left: 50%" v-model="activeName">
            <el-tab-pane label="登录" name="first">
              <div style="margin-left: 0%">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                  <el-form-item :label-width="formLabelWidth" label="用户名" prop="name">
                    <el-input autocomplete="off" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item :label-width="formLabelWidth" label="密码" prop="pass">
                    <el-input :label-width="formLabelWidth" autocomplete="off" type="password"
                              v-model="ruleForm.pass"></el-input>
                  </el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                </el-form>
                <div class="dialog-footer" slot="footer" style="margin-left: 50% ">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button @click="dialogFormVisible = false" type="primary">确 定</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
              <div style="margin-left:0%">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                  <el-form-item :label-width="formLabelWidth" label="112" prop="name">
                    <el-input autocomplete="off" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item :label-width="formLabelWidth" label="123" prop="pass">
                    <el-input :label-width="formLabelWidth" autocomplete="off" type="password"
                              v-model="ruleForm.pass"></el-input>
                  </el-form-item>
                  <el-form-item :label-width="formLabelWidth" label="用" prop="name">
                    <el-input autocomplete="off" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item :label-width="formLabelWidth" label="密" prop="pass">
                    <el-input :label-width="formLabelWidth" autocomplete="off" type="password"
                              v-model="ruleForm.pass"></el-input>
                  </el-form-item>
                </el-form>
                <div class="dialog-footer" slot="footer" style="margin-left: 50% ">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button @click="dialogFormVisible = false" type="primary">确 定</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 14, message: '长度在 3 到 14 个字符', trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 14, message: '长度在 3 到 14 个字符', trigger: 'blur'}
          ]
        },
        dialogFormVisible: false,
        formLabelWidth: '120px',
        activeIndex: '1',
        activeIndex2: '1',
        activeName: 'first'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      back() {
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style scoped>
  .logo {
    color: #138eed;
    width: 76px;
    height: 56px;
  }

  .images {
    position: fixed;
    z-index: 999;
    top: 0;
    float: left
  }

  .navMenu {
    position: fixed;
    z-index: 982;
    margin-left: 0%;
  }

  .methods {
    position: fixed;
    margin-top: 0px;
    z-index: 999;
    top: 0;
    float: right
  }
</style>
