import el from 'element-ui/src/locale/lang/el'

const state = {
  globalName: 'nizhm',
  globalAge: '24',
  globalHeight: '173',
  globalWeight: '60',
  globalCountry: 'China',
  globalProvince: 'GuangXi',
  globalWorkProvince: 'HuNan'
}

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
  bodyMeasureIndexByGetter: (state, getters) => {
    return state.globalWeight / (getters.heightByMeter ** 2)
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
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
