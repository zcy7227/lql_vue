<template>
  <el-container>
    <el-header class="header" height="100px">
      <h3>lql</h3>
      <p>用户登录功能</p>
    </el-header>
    <el-container height="1000px">
      <el-aside class="aside" width="200px">
        <div>
          <!--<h2>功能栏</h2>-->
          <!--<a>添加用户</a><br>-->
          <!--<a>删除用户</a><br>-->
          <!--<a>修改用户</a><br>-->
          <!--<a>查询</a>-->
        </div>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  .header{
    background-color: #409EFF;
    color: white;
  }

  .aside{
    background-color: #409EFF;
    color: white;
  }
</style>