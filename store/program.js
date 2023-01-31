export const strict = false

export const state = () => ({
  data: {},
  payload: {},
})

export const getters = {
  getPrograms(state) {
    return state.data
  },
}

export const mutations = {
  SAVE_PAYLOAD(state, payload) {
    state.payload = payload
  },

  SAVE_DATA(state, payload) {
    state.data = payload
  },
}
