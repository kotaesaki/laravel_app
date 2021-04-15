import Vue from 'vue'
import Vuex from 'vuex'

import line_auth from './modules/line_auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () =>({

  }),
  modules: {
    line_auth
  },
  mutations: {},
  actions: {},
  getters: {}
})