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
