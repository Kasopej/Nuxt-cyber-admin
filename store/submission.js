export const strict = false

export const state = () => ({
  data: null,
  payload: {},
})

export const mutations = {
  SAVE_PAYLOAD(state, payload) {
    state.payload = payload
  },

  SAVE_DATA(state, payload) {
    state.data = payload
  },
}
