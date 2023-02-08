// import Vue from 'vue'
// import globalMixin from '~/mixins/global'

// // Make sure to pick a unique name for the flag
// // so it won't conflict with any other mixin.
// if (!Vue.__my_mixin__) {
//   Vue.__my_mixin__ = true
//   Vue.mixin(globalMixin) // Set up your mixin then
// }

export const paginationMixin = {
  data() {
    return {
      pagination: { page: 1, length: 1 },
    }
  },
}
