import Vue from 'vue'
import Vuex from 'vuex'
// import { totalmem } from 'os'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'bua'

  },
  mutations: {
    setName: function (state, name) {
      state.name = name
    }
  },
  actions: {
    setName: function ({ commit }, name) {
      commit('setName', name)
    }
  },
  getters: {
    getName: function (state) {
      return state.name
    }
  }
})
