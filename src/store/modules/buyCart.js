const state = {
  betNumber: '',
}

const getters = {
  getBet: state => state.betNumber
}

const actions = {
  actionSelect({
    commit
  }, number ) {
    // console.log(number)
    commit('select', number)
  },
  actionReset({
    commit
  }) {
    commit('reset')
  }
}


const mutations = {
  ['select'] (state, number) {
    state.betNumber = number
  },
  ['reset'] (state) {
    state.count = null
  }
}



export default {
  actions,
  mutations,
  getters,
  state,
}
