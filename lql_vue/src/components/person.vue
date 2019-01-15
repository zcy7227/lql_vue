<template>
  <div>
    <el-container>
      <el-header style="padding: 0px;">
        <Header/>
      </el-header>
      <el-container>
        <el-aside class="aside" width="1200px">
          <PersonMain/>
        </el-aside>
        <el-main>
          <PersonIntro/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from './header'
  import PersonIntro from './personIntro'
  import PersonMain from '@/components/personMain'

  export default {
    name: 'person',
    components: {PersonMain, PersonIntro, Header}
  }
</script>

<style scoped>
  .aside {
    height: 700px;
  }
</style>
