<template>
  <div class="login">
    <div class="form">
      <div class="form-left">
        <p class="form-left_title-cn">中国人寿</p>
        <p class="form-left_title-en">China Life</p>
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          label-width="100px"
          class="loginForm">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" :loading="loading" @click="login">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <p class="browser">推荐使用最新的谷歌或火狐浏览器（IE升级到IE9以上）</p>
    <p class="company">© 深圳市xxxx发展有限公司 粤ICP备xxxxxxxx号 All Rights Reserved 客服电话：xxxx-xxx-xxx</p>
  </div>
</template>
<script>
import { login } from '@/api/login'
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      loginForm: {
        userName: undefined,
        password: undefined
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    login () {
      if (this.loading) return
      this.loading = true
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          this.loading = false
          return
        }
        login(this.loginForm).then(res => {
          if (res.code !== '1') {
            this.$message.error(res.message || '登录失败')
            throw res
          }
          if (res.data.url) {
            window.open(res.data.url, '_self')
          } else {
            this.$router.push('/')
          }
        }).catch(err => {
          console.error(err)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  },
  created () {
    console.log(this.$route)
    const { code } = this.$route.query
    this.loginForm.code = code
  }
}
</script>
<style lang="scss">
.login {
  background: url('../../assets/images/login/login-bg.png') no-repeat;
  padding-top: 100px;
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
      background: url('../../assets/images/login/china-life.png') no-repeat;
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
