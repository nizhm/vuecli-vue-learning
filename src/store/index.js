import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const state = {
  location: 'root',
  localData: {
    insideArray: [1, 2, 3],
    insideData: {
      2020: 2020,
      2021: 2021,
      2022: 2022
    }
  }
}

const getters = {
  getLocalData: (state, getters, rootState, rootGetters) => {
    console.log('Getter getLocalData start')
    console.log(state)
    console.log(getters)
    console.log(rootState)
    console.log(rootGetters)
    console.log('Getter getLocalData end')
    return state.localData
  }
}

const mutations = {
  SET_LOCATION: (state, payload) => {
    console.log('Mutation SET_LOCATION start')
    console.log(state)
    console.log(payload)
    console.log('Mutation SET_LOCATION end')
    state.location = 'root'
  }
}

const actions = {
  changeLocation: ({ dispatch, commit, state, getters, rootState, rootGetters }, payload) => {
    console.log('Action changeLocation start')
    console.log(dispatch)
    console.log(commit)
    console.log(state)
    console.log(getters)
    console.log(rootState)
    console.log(rootGetters)
    console.log(payload)
    console.log('Action changeLocation end')
    commit('SET_LOCATION')
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
