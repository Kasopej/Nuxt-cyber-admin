export function getCompoundField(
  obj = {},
  compoundFieldString = '',
  arrayIndexIfNeeded = 0
) {
  let value = obj
  const splitCompoundFields = compoundFieldString.split('.')
  //    e.g split 'details.name' compound field into ['details', 'name']

  splitCompoundFields.forEach((field, index) => {
    value = value?.[field]
    if (Array.isArray(value)) {
      value = value[arrayIndexIfNeeded]
    }
  })
  return value
}

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

/**
 *
 * @param {() => void} fn
 * @param {number} wait
 * @returns {() => void}
 */
export function debounce(fn, wait) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...args), wait)
  }
}
