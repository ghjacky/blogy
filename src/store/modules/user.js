const state = {
  user: {
  }
}

const mutations = {
  SET_USER: (user) => {
    state.user = user
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
