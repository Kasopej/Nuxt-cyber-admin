export const emailFieldValidator = [
  (v) => !!v || 'E-mail is required',
  (v) =>
    !v ||
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    'E-mail must be valid',
]

export const requiredFieldValidator = [
  (value) => !!value || 'This field is required',
]
