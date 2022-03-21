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
    <el-row>
      <el-col :span="12">
        <el-input v-model="height">
          <el-button
            slot="append"
            icon="el-icon-refresh"
          >refreshHeight</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalHeight }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input v-model="weight">
          <el-button
            slot="append"
            icon="el-icon-refresh"
          >refreshWeight</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalWeightWithDifferentKeyName }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">BMI: </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ bodyMeasureIndex + '%' }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">Country: </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalCountry }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">Province: </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalProvince }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">workProvince: </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalWorkProvince }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'

export default {
  name: 'VuexPractice',
  data () {
    return {
      name: 'nizhm',
      age: '24',
      height: '173',
      weight: '60'
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
    },
    // use arrow function;
    // in this case, state reference to the whole store;
    ...mapState({
      globalHeight: state => state.vuexPractice.globalHeight
    }),
    // pass a string;
    // map state to a separate local keyName;
    // in this case, state reference to the vuexPractice module;
    // @see https://v3.vuex.vuejs.org/guide/state.html#the-mapstate-helper
    ...mapState('vuexPractice', {
      globalWeightWithDifferentKeyName: 'globalWeight'
    }),
    // pass a string array;
    // map state to the same local keyName;
    ...mapState('vuexPractice', ['globalCountry', 'globalProvince', 'globalWorkProvince']),
    // access this object by using standard function;
    ...mapState({
      bodyMeasureIndex (state) {
        return this.globalWeight / (state.vuexPractice.globalHeight / 100) ^ 2
      }
    })
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
