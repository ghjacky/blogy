const state = {
  user: {}
}

const mutations = {
  SET_USER: (user) => {
    state.user = user
  },
  DEL_USER: () => {
    state.user = Object.assign({}, {
      username: '',
      name: '',
      email: ''
    })
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user)
  },
  delUser({ commit }) {
    commit('DEL_USER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
