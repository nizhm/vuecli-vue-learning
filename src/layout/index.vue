<template>
  <div class="app-wrapper">
    <div class="logo">
      <span style="text-align: left; margin-left: 15px; line-height: 50px">MyLogo~</span>
      <el-button type="text" size="medium" @click="logout"class="logout-btn">Logout</el-button>
    </div>
    <div class="sidebar">
      <router-link to="/home">Home</router-link>
      <br/>
      <router-link to="/user/user-info">UserInfo</router-link>
    </div>
    <div class="main-container">
      <div class="breadcrumb-container">
        <span style="text-align: left; margin-left: 15px; line-height: 30px">Breadcrumb~</span>
      </div>
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    logout() {
      this.$confirm('Are you sure to logout?','Logout',{
        type: 'warning',
        confirmButtonText: 'Logout',
        showClose: false
      }).then(() => {
        this.$router.push({path: '/login'})
      })
    }
  }
}
</script>
<style lang="scss">
.app-wrapper {
  .logo {
    width: 100%;
    height: 50px;
    text-align: left;
    .logout-btn {
      float: right;
      margin: 7px 15px;
    }
  }
  .sidebar {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: calc(100vh - 55px);
    background-color: #FEFAF1;
  }
  .main-container {
    display: inline-block;
    width: calc(100% - 200px);
    .breadcrumb-container {
      width: 100%;
      height: 30px;
      text-align: left;
      background-color: #E6A23C;
    }
    .app-main {
      width: 100%;
      height: calc(100vh - 85px);
      background-color: #FFFFFF;
    }
  }
}
</style>
