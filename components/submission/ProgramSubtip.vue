<template>
  <div></div>
</template>

<script>
export default {
  props: {
    program: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    openDetails(program) {
      this.$store.commit('program/SAVE_DATA', program)
      // this.$router.push(`/program/${program._id}/`)
      this.$router.push(`/program/${program._id}/submissions`)
    },

    goEdit(program) {
      this.$store.commit('program/SAVE_DATA', program)
      this.$router.push(`/program/edit/${program._id}`)
    },
  },
}
</script>
