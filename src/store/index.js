import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipe: {
      water: 1,
      sugar: 0.07,
      tea: 0.006,
      starter: 0.1
    }
  },
  mutations: {
    SET_WATER (state, value) {
      state.recipe.water = parseFloat(value.split(' ')[0])
    },
    SET_SUGAR (state, value) {
      state.recipe.sugar = parseFloat(value.split(' ')[0]) / 1000
    },
    SET_TEA (state, value) {
      state.recipe.tea = parseFloat(value.split(' ')[0]) / 1000
    },
    SET_STARTER (state, value) {
      state.recipe.starter = parseFloat(value.split(' ')[0]) / 1000
    }
  },
  actions: {
  },
  modules: {
  }
})
