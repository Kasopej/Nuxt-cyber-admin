export const strict = false

export const state = () => ({
  status: false,
})

export const mutations = {
  TOGGLE_STATE(state) {
    state.status = !state.status
  },
}
