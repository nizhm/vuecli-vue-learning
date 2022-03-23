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
    <el-row>
      <p>
        <el-button type="primary" @click="exploreVuexMap">exploreVuexMap</el-button>
        <el-button type="primary" @click="exploreVuexObject">exploreVuexObject</el-button>
        <span>(Tips: Something printed in console-devtool after clicked)</span>
      </p>
    </el-row>
    <el-row>
      <section>
        <p>
          <span>Year: </span>
          <el-select v-model="year">
            <el-option :value="undefined" label="全部"></el-option>
            <el-option
              v-for="item in yearOptions"
              :key="item"
              :value="item"
            ></el-option>
          </el-select>
        </p>
        <el-table
          :data="tableData"
          height="260px"
        >
          <el-table-column type="index" label="Index" width="80px"></el-table-column>
          <el-table-column prop="time" label="Time"></el-table-column>
          <el-table-column prop="salary" label="Salary"></el-table-column>
        </el-table>
      </section>
    </el-row>
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
      workProvince: 'HuNan',
      year: undefined,
      tableData: []
    }
  },
  watch: {
    yearOptions (newValue) {
      if (newValue.length) {
        this.year = newValue[newValue.length - 1]
      } else {
        this.year = undefined
      }
    },
    year (newValue) {
      this.tableData = this.getSalariesByYear(newValue ? [newValue] : this.yearOptions)
    }
  },
  computed: {
    // use store to retrieve state, however it causes the component to rely on the global store singleton;
    // @see https://v3.vuex.vuejs.org/guide/state.html#getting-vuex-state-into-vue-components
    globalName () {
      // will report an error within console-devtool in strict mode;
      return store.state.vuexPractice.globalName
    },
    globalAge () {
      // will report an error within console-devtool in strict mode;
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
    heightByMeter () {
      return this.$store.getters['vuexPractice/heightByMeter']
    },
    ...mapGetters('vuexPractice', ['weightByJin', 'bodyMeasureIndexByGetter', 'yearOptions', 'getSalariesByYear'])
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
    },
    exploreVuexObject () {
      console.log('-------------------------------------')
      this.$store.dispatch('changeLocation', 'root')
      this.$store.dispatch('testParameter/changeLocation', 'testParameter')
      // this.$store.commit('SET_LOCATION', 'root', { key: 123 }, 123)
      // this.$store.commit('testParameter/SET_LOCATION', 'root', { key: 123 }, 123)
      // this.$store.getters['getLocalData']
      // this.$store.getters['testParameter/getLocalData']
      console.log(this.$store)
      console.log(this.$store['_actions'])
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
