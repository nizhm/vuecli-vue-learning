<template>
  <div class="author">
    <div class="info-container">
      <el-row>
        <el-col :span="4">userName</el-col>
        <el-col :span="10">{{ userName }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">age</el-col>
        <el-col :span="10">{{ age }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">weight</el-col>
        <el-col :span="10">
          {{ weight }}
          <span class="unit">(kg)</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">height</el-col>
        <el-col :span="10">
          {{ height }}
          <span class="unit">(cm)</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">job</el-col>
        <el-col :span="10">{{ job }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">believe</el-col>
        <el-col :span="10">{{ believe }}</el-col>
      </el-row>
    </div>
    <child></child>
  </div>
</template>
<script>
import Child from '@/views/author/components/Child'

export default {
  name: 'UserInfo',
  components: { Child },
  data () {
    return {
      userName: 'y',
      age: 24,
      weight: 60,
      height: 173.5,
      job: 'front-end engineer',
      believe: 'Talk is cheap, show me you code'
    }
  }
}
</script>
<style lang="scss">
  .author {
    .info-container {
      padding: 20px;
      font-size: 18px;
      line-height: 50px;
      .el-row {
        margin-top: 10px;
        .el-col {
          &:first-child {
            padding-right: 10px;
            background-color: #C6E4FF;
            text-align: right;
          }
          &:last-child {
            padding-left: 20px;
            background-color: #F3F6FA;
            text-align: left;
            font-weight: 700;
            .unit {
              font-weight: 400;
            }
          }
        }
      }
    }
  }
</style>
