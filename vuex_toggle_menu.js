export const state = () => ({
  isNavOpen: false
})

export const mutations = {
  toggleNav (state) {
    state.isNavOpen = !state.isNavOpen
  }
}

export const actions = {
  toggleSideBar ({ commit }) {
    commit('toggleNav')
  }
}