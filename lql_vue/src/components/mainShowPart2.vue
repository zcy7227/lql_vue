<template>
  <div>
    <el-container>
      <el-header style="padding: 0">
        <Header/>
      </el-header>
      <el-main style="height: 800px"></el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from './header'

  export default {
    name: 'mainShowpart2',
    components: {Header}
  }
</script>

<style scoped>

</style>
