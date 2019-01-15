<template>
  <div>
    <div class="block" style="width: 50%;margin-left: 25%">
      <el-carousel :interval="4000" height="200px" type="card">
        <el-carousel-item :key="item" v-for="item in dataimg">
          <img :src="item.src">
          <p class="italictext">{{item.txt}}</p>
          <span class="service">{{item.txt2}}</span>
          <p class="last">{{item.txt3}}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="overflow:hidden">
      <div class="part1">
        <el-card class="box-card" shadow="hover">
          <div :key="o" class="text item" v-for="o in 4">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="part2">
        <el-card class="box-card" shadow="hover">
          <div :key="o" class="text item" v-for="o in 4">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="part3">
        <el-card class="box-card" shadow="hover">
          <div :key="o" class="text item" v-for="o in 4">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="part4">
        <el-card class="box-card" shadow="hover">
          <div :key="o" class="text item" v-for="o in 4">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainShow',
    data() {
      return {

        dataimg: [{
          src: require('../assets/liu.png'),
          txt: '"Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."',
          txt2: '一站式服务',
          txt3: 'Miami, FL'
        },
          {
            src: require('../assets/logLiu.png'),
            txt: '"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor."',
            txt2: '国际服务',
            txt3: 'Greensboro, NC'
          },
          {
            src: require('../assets/logo.png'),
            txt: '"Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."',
            txt2: '全网渠道',
            txt3: 'Charlotte, NC'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 470px;
  }

  .part1 {
    margin-left: 20%;
    float: left;
    margin-right: 60px;
  }

  .part2 {
    float: left
  }

  .part3 {
    margin-top: 20px;
    margin-left: 20%;
    float: left;
    margin-right: 60px
  }

  .part4 {
    margin-top: 20px;
    float: left
  }
</style>
