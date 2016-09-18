import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const mutations = {
  INCREMENT: state => {
    state.count++
  },
  SET_INITIAL_COUNT: (state, val) => {
    state.count = val
  }
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  actions,
  mutations,
  getters
})
