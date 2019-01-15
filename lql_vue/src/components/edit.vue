<template>
  <el-container>
    <el-header style="padding: 0">
      <Header/>
    </el-header>
    <el-main>
      <div style="margin-left: 20%"><h1>文本编辑区<i class="el-icon-edit"></i></h1></div>
      <div id="app">
        <vue-editor class="editor" v-model="content"></vue-editor>
        <div class="but">
          <el-button plain type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button plain style="margin-left: 40px" type="primary">清除<i class="el-icon-circle-close-outline"></i>
          </el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import {VueEditor} from 'vue2-editor'
  import Header from '@/components/header'

  export default {

    components: {
      VueEditor, Header
    },

    data() {
      return {
        content: '<h1>Some initial content</h1>'
      }
    }
  }
</script>

<style>
  .editor {
    margin-left: 20%;
    height: 600px;
    width: 1000px;
  }

  .but {
    margin-left: 65%;
    margin-top: 60px;
  }
</style>
