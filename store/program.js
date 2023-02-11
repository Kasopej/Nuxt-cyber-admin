export const strict = false

export const state = () => ({
  programsCount: null,
})

export const getters = {
  getProgramsCount(state) {
    return state.programsCount
  },
}

export const mutations = {
  updateProgramsCount(state, count) {
    state.programsCount = count
  },
}
