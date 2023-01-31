<template>
  <v-card>
    <v-card-title primary-title class="flex">
      <v-img
        :src="program.thumbnail || '/img/dummy.jpg'"
        width="30"
        max-height="30px"
        max-width="30px"
      />
      <span class="ml-auto">{{ program.title }}</span>
    </v-card-title>
    <v-card-text>
      <div class="flex mb-2">
        <v-icon color="primary" class="mr-1">{{ visibilityIcon }}</v-icon>
        <v-icon color="primary" class="mr-1">{{
          allowCollaborationsIcon
        }}</v-icon>
        <v-icon
          color="primary"
          class="ml-auto cursor-pointer"
          @click="goEdit(program)"
          >mdi-pencil</v-icon
        >
      </div>
      <small class="text-accent">{{ program.status }}</small>
      <v-img
        :src="program.banner || '/img/dummy.jpg'"
        :max-width="$vuetify.breakpoint.mobile ? '100%' : '100%'"
        class="rounded mt-1 cursor-pointer"
        @click="openDetails(program)"
      />
      <section class="mt-2" @mouseenter="reveal = true">
        <v-chip small> {{ program.type }} </v-chip>
        <v-alert class="fit-content mt-2 text-white" color="info" dense>
          {{ displayReward(program.reward) }}
        </v-alert>
      </section>
    </v-card-text>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
        @mouseleave="reveal = false"
      >
        <v-card-text class="pb-0">
          <p class="p-3 longform-content font-medium">
            {{ briefDescription }}
          </p>
          <v-btn color="primary" @click="reveal = false">Close</v-btn>
        </v-card-text>
      </v-card>
    </v-expand-transition>
    <!-- <v-card-title primary-title class="d-flex">
    </v-card-title>
    <v-card-text>
      <section class="d-flex mb-2">
        <v-icon color="primary" class="ml-auto" @click="toggleFavorite">{{
            favoriteIcon
          }}</v-icon>
      </section>
    </v-card-text> -->
    <!--  -->
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

  data() {
    return {
      reveal: false,
    }
  },

  computed: {
    visibilityIcon() {
      return this.program.private ? 'mdi-eye-off' : 'mdi-eye'
    },
    briefDescription() {
      return (
        this.program.description.slice(0, 400) +
        `${this.program.description.length > 400 ? '...' : ''}`
      )
    },
    allowCollaborationsIcon() {
      return this.program.allowCollaborations
        ? 'mdi-account-group'
        : 'mdi-account'
    },
  },

  methods: {
    openDetails(program) {
      this.$store.commit('program/SAVE_DATA', program)
      this.$router.push(`/program/${program._id}/submissions`)
    },

    goEdit(program) {
      this.$store.commit('program/SAVE_DATA', program)
      this.$router.push(`/program/${program._id}/edit`)
    },
    displayReward(rawReward) {
      if (isNaN(+rawReward)) return rawReward
      return `$${rawReward} per vulnerability`
    },
  },
}
</script>

<style scoped>
.hover {
  cursor: pointer;
}
</style>
