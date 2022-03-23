const state = {
  location: 'testParameter',
  localData: {
    insideArray: ['test', 'parameter'],
    insideData: {
      2020: 'test',
      2021: 'parameter'
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
    state.location = 'testParameter'
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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
