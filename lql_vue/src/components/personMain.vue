<template>
  <div>
    <el-form :label-position="left" :model="user" label-width="80px"
             style="margin-top: 50px;margin-right: 200px;margin-left: 150px">
      <el-form-item label="用户名">
        <el-input v-model="user.userName"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="user.createBy"></el-input>
      </el-form-item>
      <el-form-item label="家庭情况">
        <el-input v-model="user.familyInformation"></el-input>
      </el-form-item>
      <el-form-item label="最高学历">
        <el-input v-model="user.highestEducation"></el-input>
      </el-form-item>
      <el-form-item label="用户信息状态">
        <el-input v-model="user.infoState"></el-input>
      </el-form-item>
      <el-form-item label=" 是否结婚">
        <el-switch
          active-text="否"
          inactive-text="是"
          v-model="user.isMarried">
        </el-switch>
      </el-form-item>
      <el-form-item label=" 社会兼职">
        <el-input v-model="user.otherWork"></el-input>
      </el-form-item>
      <el-form-item label="QQ号">
        <el-input v-model="user.qqId"></el-input>
      </el-form-item>
      <el-form-item label="代表作">
        <el-input v-model="user.representativeWorks"></el-input>
      </el-form-item>
      <el-form-item label="研究领域">
        <el-input v-model="user.researchField"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="user.roleDescribe"></el-input>
      </el-form-item>
      <el-form-item label="角色Id">
        <el-input v-model="user.roleId"></el-input>
      </el-form-item>
      <el-form-item label="角色名">
        <el-input v-model="user.roleName"></el-input>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-input v-model="user.schoolTag"></el-input>
      </el-form-item>
      <el-form-item label=" 留学国别">
        <el-input v-model="user.studyAbroadCountry"></el-input>
      </el-form-item>
      <el-form-item label="用户头像URL">
        <el-input v-model="user.userAvatarUrl"></el-input>
      </el-form-item>
      <el-form-item label=" 出生日期">
        <el-input v-model="user.userBirthday"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.userEmail"></el-input>
      </el-form-item>
      <el-form-item label="用户爱好">
        <el-input v-model="user.userHobby"></el-input>
      </el-form-item>
      <el-form-item label="用户ID">
        <el-input v-model="user.userId"></el-input>
      </el-form-item>
      <el-form-item label="用户所选语言">
        <el-input v-model="user.userLanguage"></el-input>
      </el-form-item>
      <el-form-item label="民族">
        <el-input v-model="user.userNation"></el-input>
      </el-form-item>
      <el-form-item label=" 籍贯">
        <el-input v-model="user.userNativePlace"></el-input>
      </el-form-item>
      <el-form-item label="用户手机">
        <el-input v-model="user.userPhone"></el-input>
      </el-form-item>
      <el-form-item label="党政面貌">
        <el-input v-model="user.userPoliticalStatus"></el-input>
      </el-form-item>
      <el-form-item label="用户真实姓名">
        <el-input v-model="user.userRealName"></el-input>
      </el-form-item>
      <el-form-item label="角色Id">
        <el-input v-model="user.userRoleId"></el-input>
      </el-form-item>
      <el-form-item label="用户性别">
        <el-input v-model="user.userSex"></el-input>
      </el-form-item>
      <el-form-item label="用户状态">
        <el-input v-model="user.userState"></el-input>
      </el-form-item>
      <el-form-item label="微信号">
        <el-input v-model="user.wechatId"></el-input>
      </el-form-item>
      <el-form-item label="获奖记录">
        <el-input v-model="user.winningRecord"></el-input>
      </el-form-item>
      <el-form-item label="职务">
        <el-input v-model="user.workDuty"></el-input>
      </el-form-item>
      <el-form-item label="工作单位">
        <el-input v-model="user.workUnit"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="user.userRemarks"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        user: {
          userName: '',
          createBy: '',
          familyInformation: '',
          highestEducation: '',
          infoState: '',
          isMarried: 'true',
          otherWork: '',
          qqId: '',
          representativeWorks: '',
          researchField: '',
          roleDescribe: '',
          roleId: '',
          roleName: '',
          schoolTag: '',
          studyAbroadCountry: '',
          userAvatarUrl: '',
          userBirthday: '',
          userEmail: '',
          userHobby: '',
          userId: '',
          userLanguage: '',
          userNation: '',
          userNativePlace: '',
          userPhone: '',
          userPoliticalStatus: '',
          userRealName: '',
          userRoleId: '',
          userSex: '',
          userState: '',
          wechatId: '',
          winningRecord: '',
          workDuty: '',
          workUnit: '',
          userRemarks: ''
        }
      }
    },
    mounted() {
      this.$axios.get('users?id=1').then((body) => {
        this.user.userName = body.data.userName
        this.user.createBy = body.data.createBy
        this.user.familyInformation = body.data.familyInformation
        this.user.highestEducation = body.data.highestEducation
        this.user.infoState = body.data.infoState
        this.user.isMarried = body.data.isMarried
        this.user.otherWork = body.data.otherWork
        this.user.qqId = body.data.qqId
        this.user.representativeWorks = body.data.representativeWorks
        this.user.researchField = body.data.researchField
        this.user.roleDescribe = body.data.roleDescribe
        this.user.roleId = body.data.roleId
        this.user.roleName = body.data.roleName
        this.user.schoolTag = body.data.schoolTag
        this.user.studyAbroadCountry = body.data.studyAbroadCountry
        this.user.userAvatarUrl = body.data.userAvatarUrl
        this.user.userBirthday = body.data.userBirthday
        this.user.userEmail = body.data.userEmail
        this.user.userHobby = body.data.userHobby
        this.user.userId = body.data.userId
        this.user.userLanguage = body.data.userLanguage
        this.user.userNation = body.data.userNation
        this.user.userNativePlace = body.data.userNativePlace
        this.user.userPhone = body.data.userPhone
        this.user.userPoliticalStatus = body.data.userPoliticalStatus
        this.user.userRealName = body.data.userRealName
        this.user.userRoleId = body.data.userRoleId
        this.user.userSex = body.data.userSex
        this.user.userState = body.data.userState
        this.user.wechatId = body.data.wechatId
        this.user.winningRecord = body.data.winningRecord
        this.user.workDuty = body.data.workDuty
        this.user.workUnit = body.data.workUnit
        this.user.userRemarks = body.data.userRemarks
      })
    }

  }
</script>

<style scoped>

</style>
