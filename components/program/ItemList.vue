<template>
  <v-card
    class="d-flex align-center mt-6 overflow-x-hidden"
    @click="openDetails(program)"
  >
    <v-img
      src="/images/dummy.jpg"
      width="250"
      height="200"
      :max-width="$vuetify.breakpoint.mobile ? '100px' : '250px'"
      cover
    />

    <section
      style="min-height: 200px"
      class="
        flex-grow-1
        fill-height
        w-full
        d-flex
        flex-column
        justify-space-between
        pa-2 pa-md-4
      "
    >
      <div class="d-sm-flex justify-space-between">
        <header
          class="headline font-weight-medium accent--text"
          v-text="program.title"
        />

        <aside
          class="
            grey--text
            text--darken-2
            font-weight-bold
            py-2
            px-sm-4
            py-sm-0
          "
          v-text="program.status"
        />
      </div>

      <div
        class="d-none d-sm-inline grey--text text--darken-2 text-no-wrap py-3"
      >
        <v-icon small class="mr-2">mdi-gift</v-icon>
        <span v-text="program.reward" />
      </div>

      <div class="pb-1 text-no-wrap">
        <v-icon small class="mr-2">mdi-counter</v-icon
        ><strong v-text="program.submission || 0" />
        Submissions
      </div>
      <div class="font-italic text-no-wrap">
        <v-icon small class="mr-2">mdi-tag</v-icon>
        <small v-text="program.type" />
      </div>
    </section>
  </v-card>
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
      this.$router.push(`/program/${program._id}/`)
    },
  },
}
</script>
