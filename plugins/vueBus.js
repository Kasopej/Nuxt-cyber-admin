import Vue from 'vue'
export default function (context, inject) {
  const vueBus = new Vue({
    data: {
      companyAccount: null,
    },
  })
  inject('vueBus', vueBus)
}
