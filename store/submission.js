export const strict = false

export const state = () => ({
  data: null,
  payload: {},
  hasBackClick: false,
})

export const mutations = {
  SAVE_PAYLOAD(state, payload) {
    state.payload = payload
  },

  SAVE_DATA(state, payload) {
    state.data = payload
  },

  SELECTED_BACK_CLICK(state, payload) {
    state.hasBackClick = payload
  },
}
