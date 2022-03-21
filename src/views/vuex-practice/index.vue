<template>
  <div class="vuex-practice">
    <el-row>
      <el-col :span="12">
        <el-input v-model="name">
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refreshName"
          >refreshName</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalName }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input v-model="age">
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refreshAge"
          >refreshAge</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalAge }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'VuexPractice',
  data () {
    return {
      name: 'nizhm',
      age: '24'
    }
  },
  computed: {
    /**
     * use store to retrieve state, however it causes the component to rely on the global store singleton
     *
     * @see https://v3.vuex.vuejs.org/guide/state.html#getting-vuex-state-into-vue-components
     * @return {vuexPractice.globalName}
     */
    globalName () {
      return store.state.vuexPractice.globalName
    },
    globalAge () {
      return this.$store.state.vuexPractice.globalAge
    }
  },
  methods: {
    refreshName () {
      // do not recommend, instead using Mutations and Actions;
      store.state.vuexPractice.globalName = this.name
    },
    refreshAge () {
      // do not recommend, instead using Mutations and Actions;
      this.$store.state.vuexPractice.globalAge = this.age
    }
  }
}
</script>

<style scoped>
  .vuex-practice {
  }
  .el-row {
    margin: 16px;
  }
  .content {
    text-align: center;
    line-height: 32px;
  }
</style>
