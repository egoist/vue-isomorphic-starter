import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  count: 0
}

const inBrowser = typeof window !== 'undefined'

const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
  INCREMENT: (state) => {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
