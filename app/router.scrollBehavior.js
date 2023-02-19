export default (to, from, savedPosition) => {
  // always scroll to top
  if (to.name === from.name) return //  if it is a tab navigation do nothing
  return { x: 0, y: 0 }
}
