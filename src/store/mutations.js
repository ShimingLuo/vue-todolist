
// store/mutations.js

import * as types from './mutation-types'

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + Number(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - Number(time)
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    state.list.push(plan)
  },
  // 删除计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1)
  }
}
