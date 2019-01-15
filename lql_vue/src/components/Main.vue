<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader/>
      </el-header>
      <el-main class="main">
        <main-show/>
      </el-main>
      <el-footer class="footer" style="margin-top:25px">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import MainShow from '@/components/mainShow'
  import Footer from '@/components/footer'

  export default {
    name: 'app',
    components: {
      Footer,
      MainShow,
      'vheader': Header
    }
  }

</script>

<style scoped>
  .header {
    padding: 0;
    line-height: 60px;
    width: 100%;
  }

  .main {
    width: 100%;
  }

  .footer {
    width: 100%;
    height: 60px;
  }
</style>
