import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipe: {
      water: 1,
      sugar: 0.07,
      tea: 0.006,
      starter: 0.2
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
