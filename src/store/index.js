// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: [],
  myinfo: {
    name: 'XXX',
    avatar: ''
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

