export const strict = false

export const state = () => ({
  data: null,
  payload: {},
  submissionSelected: false,
})

export const mutations = {
  SAVE_PAYLOAD(state, payload) {
    state.payload = payload
  },

  SAVE_SUBMISSION(state, payload) {
    state.data = payload
  },

  SUBMISSION_SELECTED(state, payload) {
    state.submissionSelected = payload
  },
}
