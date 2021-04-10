export const strict = false

export const state = () => ({
  color: 'red',
  status: true,
  text: '{Sample Text}',
  icon: null,
  timeout: 5000,
})

export const mutations = {
  async SHOW(state, payload) {
    state.text = payload.text || '<< TEXT HERE >>'
    state.icon = payload.icon || 'mdi-information-outline'
    state.color = payload.color || 'accent'
    state.timeout = payload.timeout || 5000
    state.status = true

    // Kill the snackbar after {timeout} seconds
    await new Promise((resolve) => setTimeout(resolve, state.timeout))
    this.commit('notification/CLOSE')
  },

  CLOSE(state) {
    state.status = false
    state.text = '<< TEXT HERE >>'
    state.icon = 'mdi-information-outline'
    state.color = 'accent'
    state.timeout = 5000
  },
}
