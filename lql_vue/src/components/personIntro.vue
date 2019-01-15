<template>
  <div>
    <el-card class="box-card" style="background-color: lightcyan">
      <img style="height: 300px;width: auto;border-radius: 300px;margin-left: 30px" title="头像" v-bind:src="image"/>
      <div class="text item">
        <table style="margin: auto;font-size: 20px">
          <tr>
            <td>用户邮箱：</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>{{userEmail}}</td>
          </tr>
          <br>
          <tr>
            <td>用户ID&nbsp;&nbsp; ：</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>{{userId}}</td>
          </tr>
          <br>
          <tr>
            <td>用户名&nbsp;&nbsp; ：</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>{{userName}}</td>
          </tr>
          <br>
        </table>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'personIntro',
    data() {
      return {
        image: '',
        userEmail: '',
        userId: '',
        userName: ''
      }
    },
    mounted() {
      this.$axios.get('users?id=1').then((body) => {
        this.image = body.data.userAvatarUrl
        this.userEmail = body.data.userEmail
        this.userId = body.data.userId
        this.userName = body.data.userName
      })
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    margin-top: 20px;
    margin-left: 40px;
    width: 400px;
    height: 600px;
  }

</style>
