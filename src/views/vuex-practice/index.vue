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
            @click="refreshHeight"
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
            @click="refreshWeight"
          >refreshWeight</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalWeightWithDifferentKeyName }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">Height(m): </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ heightByMeter }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">Weight(斤): </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ weightByJin }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p class="content">BMI(By getter): </p>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ bodyMeasureIndexByGetter + '%' }}</p>
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
        <el-input v-model="country">
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refreshCountry"
          >refreshCountry</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalCountry }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input v-model="province">
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refreshProvince"
          >refreshProvince</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalProvince }}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input v-model="workProvince">
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refreshWorkProvince"
          >refreshWorkProvince</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="content">{{ globalWorkProvince }}</p>
      </el-col>
    </el-row>
    <p>
      <el-button type="primary" @click="exploreVuexMap">exploreVuexMap</el-button>
    </p>
  </div>
</template>

<script>
import store from '@/store'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'VuexPractice',
  data () {
    return {
      name: 'nizhm',
      age: '24',
      height: '173',
      weight: '60',
      country: 'China',
      province: 'GuangXi',
      workProvince: 'HuNan'
    }
  },
  computed: {
    // use store to retrieve state, however it causes the component to rely on the global store singleton;
    // @see https://v3.vuex.vuejs.org/guide/state.html#getting-vuex-state-into-vue-components
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
    ...mapState('vuexPractice', ['globalCountry', 'globalProvince', 'globalWorkProvince', 'salaries']),
    // access this object by using standard function;
    ...mapState({
      bodyMeasureIndex (state) {
        return this.globalWeightWithDifferentKeyName / ((state.vuexPractice.globalHeight / 100) ** 2)
      }
    }),
    ...mapGetters('vuexPractice', ['heightByMeter', 'weightByJin', 'bodyMeasureIndexByGetter'])
  },
  methods: {
    // map `this.SET_GLOBAL_WEIGHT(payload)` to `this.$store.commit('vuexPractice/SET_GLOBAL_WEIGHT', payload)`
    // @see https://v3.vuex.vuejs.org/guide/mutations.html#committing-mutations-in-components
    ...mapMutations('vuexPractice', ['SET_GLOBAL_WEIGHT']),
    // map `this.updateCountry(payload)` to `this.$store.commit('vuexPractice/SET_GLOBAL_COUNTRY', payload)`
    ...mapMutations('vuexPractice', {
      updateCountry: 'SET_GLOBAL_COUNTRY'
    }),
    // map `this.changeGlobalWorkProvince(payload)` to `this.$store.dispatch('vuexPractice/changeGlobalWorkProvince', payload)`
    ...mapActions('vuexPractice', ['changeGlobalWorkProvince']),
    refreshName () {
      // do not recommend, instead using Mutations and Actions;
      store.state.vuexPractice.globalName = this.name
    },
    refreshAge () {
      // do not recommend, instead using Mutations and Actions;
      this.$store.state.vuexPractice.globalAge = this.age
    },
    refreshHeight () {
      // commit mutation directly in non-asynchronous operation;
      this.$store.commit('vuexPractice/SET_GLOBAL_HEIGHT', { height: this.height })
    },
    refreshWeight () {
      this.SET_GLOBAL_WEIGHT({ weight: this.weight })
    },
    refreshCountry () {
      this.updateCountry({ country: this.country })
    },
    refreshProvince () {
      // dispatch action instead of mutation with asynchronous operation;
      this.$store.dispatch('vuexPractice/changeGlobalProvince', { province: this.province })
    },
    refreshWorkProvince () {
      this.changeGlobalWorkProvince({ workProvince: this.workProvince })
    },
    exploreVuexMap () {
      /**
       * return or map in computed
       *
       * 1.primitive value: the same;
       * 2.reference value: also the same;
       * 3.deepClone one level Object: spread operator;
       * 4.deepClone nested Object(only plain object and array): JSON.parse(JSON.stringify());
       *
       * @type {any}
       */
      const list = { ...this.salaries }
      console.log(JSON.parse(JSON.stringify(this.salaries)))
      // this change will affect `this.salaries[2020][0]`
      list[2020][0].salary = 10000
      // log false
      console.log(list === this.salaries)
      console.log(JSON.parse(JSON.stringify(this.salaries)))
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
