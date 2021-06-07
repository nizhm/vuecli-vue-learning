<template>
  <div class="login">
    <el-input v-model="name"></el-input>
    <el-button type="primary" @click="">Login</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      name: 'nizm'
    }
  }
}
</script>
