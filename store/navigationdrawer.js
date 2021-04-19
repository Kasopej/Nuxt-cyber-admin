export const strict = false

export const state = () => ({
  status: true,
})

export const mutations = {
  SHOW(state) {
    state.status = !state.status
  },
}
