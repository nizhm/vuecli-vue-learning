const state = {
  globalName: 'nizhm',
  globalAge: '24',
  globalHeight: '173',
  globalWeight: '60',
  globalCountry: 'China',
  globalProvince: 'GuangXi',
  globalWorkProvince: 'HuNan',
  salaries: {}
}

setTimeout(() => {
  const obj = {
    2020: [
      { time: '2020-08', salary: 8000 },
      { time: '2020-09', salary: 8000 },
      { time: '2020-10', salary: 8000 },
      { time: '2020-11', salary: 8000 },
      { time: '2020-12', salary: 8000 }
    ],
    2021: [
      { time: '2021-01', salary: 8000 },
      { time: '2021-02', salary: 8000 },
      { time: '2021-03', salary: 8000 },
      { time: '2021-04', salary: 8000 },
      { time: '2021-05', salary: 8000 },
      { time: '2021-06', salary: 8000 },
      { time: '2021-07', salary: 8000 },
      { time: '2021-08', salary: 8000 },
      { time: '2021-09', salary: 8000 },
      { time: '2021-10', salary: 8000 },
      { time: '2021-11', salary: 9500 },
      { time: '2021-12', salary: 9500 }
    ],
    2022: [
      { time: '2022-01', salary: 9500 },
      { time: '2022-02', salary: 9500 }
    ]
  }
  state.salaries = obj
}, 300)

const getters = {
  heightByMeter: state => {
    if (!state.globalHeight) {
      return state.globalHeight
    } else {
      return parseInt(state.globalHeight) / 100
    }
  },
  weightByJin: state => {
    if (!state.globalWeight) {
      return state.globalWeight
    } else {
      return parseInt(state.globalWeight) * 2
    }
  },
  bodyMeasureIndexByGetter: (state, getters, rootState, rootGetters) => {
    return state.globalWeight / (getters.heightByMeter ** 2)
  },
  yearOptions: state => Object.keys(state.salaries),
  getSalariesByYear: state => yearArray => {
    let list = []
    if (yearArray.length) {
      yearArray.forEach(item => {
        list = [...list, ...state.salaries[item]]
      })
    }
    return list
  }
}

const mutations = {
  SET_GLOBAL_HEIGHT (state, payload) {
    state.globalHeight = payload.height
  },
  SET_GLOBAL_WEIGHT (state, payload) {
    state.globalWeight = payload.weight
  },
  SET_GLOBAL_COUNTRY (state, payload) {
    state.globalCountry = payload.country
  },
  SET_GLOBAL_PROVINCE (state, payload) {
    state.globalProvince = payload.province
  },
  SET_GLOBAL_WORK_PROVINCE (state, payload) {
    state.globalWorkProvince = payload.workProvince
  }
}

const actions = {
  changeGlobalProvince (context, payload) {
    setTimeout(() => {
      context.commit('SET_GLOBAL_PROVINCE', payload)
    }, 1500)
  },
  changeGlobalWorkProvince ({ commit, dispatch, getters, state, rootGetters, rootState }, payload) {
    setTimeout(() => {
      commit('SET_GLOBAL_WORK_PROVINCE', payload)
    }, 2000)
  }
}

export default {
  // set true to give getters/mutations/actions a module symbol;
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
