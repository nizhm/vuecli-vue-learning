<template>
  <div class="login">
    <div class="form">
      <div class="form-left">
        <p class="form-left_title-cn">全球领先的云通讯平台</p>
        <p class="form-left_title-en">The world's leading cloud communication platform</p>
      </div>
      <div class="form-right">
        <el-button class="login-btn" type="primary" @click="login">Login</el-button>
      </div>
    </div>
    <p class="browser">推荐使用最新的谷歌或火狐浏览器（IE升级到IE9以上）</p>
    <p class="company">© 深圳市xxxx发展有限公司 粤ICP备xxxxxxxx号 All Rights Reserved 客服电话：xxxx-xxx-xxx</p>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      name: 'nizm'
    }
  },
  methods: {
    login() {
      this.$router.push({path: 'home'})
    }
  }
}
</script>
<style lang="scss">
.login {
  background: url('../../assets/images/login/login-bg.png') no-repeat;
  .form {
    margin: 0 auto;
    width: 875px;
    height: 570px;
    background: #FDFDFE;
    box-shadow: 0px 20px 40px 0px rgba(38, 112, 255, 0.09);
    border-radius: 20px;
    .form-left {
      display: inline-block;
      width: 400px;
      height: 570px;
      background: url('../../assets/images/login/form-left-bg.png') no-repeat;
      border-radius: 20px 0px 0px 20px;
      color: #FFFFFF;
      .form-left_title-cn {
        padding-top: 90px;
        font-size: 22px;
        font-weight: 500;
      }
      .form-left_title-en {
        padding-top: 15px;
        font-size: 14px;
      }
    }
    .form-right {
      display: inline-block;
      vertical-align: top;
      width: 475px;
      height: 570px;
      .login-btn {
        width: 74px;
        margin-top: 400px;
      }
    }
  }
  .browser {
    margin-top: 30px;
    font-size: 12px;
    line-height: 20px;
    color: #8A98A8;
  }
  .company {
    position: absolute;
    margin-top: 16px;
    bottom: 0;
    font-size: 12px;
    line-height: 20px;
    color: #8A98A8;
  }
}
</style>
