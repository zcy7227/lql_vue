<template>
  <el-container>
    <el-header style="padding: 0">
      <Header/>
    </el-header>
    <el-container>
      <el-main>
        <admin-main/>
      </el-main>
    </el-container>
    <el-footer style="margin-top: 5%">
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import Header from '@/components/header'
  import AdminMain from '@/components/adminMain'
  import Footer from '@/components/footer'

  export default {
    name: 'personPage',
    components: {Footer, AdminMain, Header}
  }
</script>

<style scoped>

</style>
