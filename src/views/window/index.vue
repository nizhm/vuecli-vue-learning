<template>
  <div class="window">
    <section class="page-header">
      <p>This page show the properties of Window</p>
    </section>
    <section class="form">
      <p>
        <el-input
          v-model="propKey"
          @change="propKeyChange"
        ></el-input>
      </p>
    </section>
    <section class="window-props-list">
      <p
        v-for="item in propsList"
        :key="item"
      >
        {{ item }}
      </p>
    </section>
    <section class="props"></section>
  </div>
</template>
<script>
  export default {
    name: 'Window',
    computed: {
    },
    data() {
      return {
        propKey: 'window',
        propsList: []
      }
    },
    created() {
      this.propsList = Object.getOwnPropertyNames(window[this.propKey])
    },
    methods: {
      propKeyChange(val) {
//        const arr = Object.getOwnPropertyNames(window[val])
        console.log(val)
      }
    }
  }
</script>
<style lang="scss">
  .window {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .page-header {
      height: 50px;
      width: 100%;
      border: 1px solid green;
    }
    .form {
      height: 50px;
      width: 100%;
      border: 1px solid green;
    }
    .window-props-list {
      height: 800px;
      max-height: 100%;
      overflow-y: auto;
      width: 30%;
      border: 1px solid green;
      padding: 8px;
    }
    .props {
      height: 800px;
      max-height: 100%;
      overflow-y: auto;
      width: 65%;
      border: 1px solid red;
    }
  }
</style>
