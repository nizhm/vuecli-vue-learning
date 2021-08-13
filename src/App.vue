<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item in routes"
        :key="item.path"
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
    </div>
    <div class="app-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import router from './router'
  export default {
    name: 'App',
    computed: {
      routes() {
        return router.options.routes
      }
    },
    data() {
      return {}
    },
    methods: {
    }
  }
</script>

<style lang="scss">
#app {
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#nav {
  display: inline-block;
  width: 10%;
  height: 100%;
  overflow: auto;
  background-color: antiquewhite;
}

#nav a {
  line-height: 20px;
  font-weight: bold;
  color: #2c3e50;
  display: block;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  .app-container {
    display: inline-block;
    width: 90%;
    height: 100%;
    overflow: auto;
  }
</style>
