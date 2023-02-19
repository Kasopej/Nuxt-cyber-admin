export const strict = false

export const state = () => ({
  programsCount: null,
  popProgramLimitModal: false,
})

export const getters = {
  getProgramsCount(state) {
    return state.programsCount
  },
}

export const mutations = {
  UPDATE_PROGRAMS_COUNT(state, count) {
    state.programsCount = count
  },
  TOGGLE_PROGRAM_LIMIT_ALERT(state, value) {
    state.popProgramLimitModal = value
  },
}
