+<template>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

#nav {
  width: 15%;
  height: 770px;
  padding: 20px;
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
    width: 90%;
    height: 770px;
  }
</style>
