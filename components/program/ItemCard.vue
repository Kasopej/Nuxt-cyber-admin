<template>
  <v-card class="!flex flex-col justify-start w-full">
    <v-card-title
      primary-title
      class="flex !items-start"
      :class="{ 'flex-col': $vuetify.breakpoint.mdAndUp }"
    >
      <v-img
        :src="program.thumbnail || '/img/dummy.jpg'"
        width="30"
        max-height="30px"
        max-width="30px"
      />
      <span :class="{ 'ml-auto': $vuetify.breakpoint.smAndDown }">{{
        program.title
      }}</span>
    </v-card-title>
    <v-card-text>
      <div class="flex mb-2">
        <v-icon color="primary" class="mr-1">{{ visibilityIcon }}</v-icon>
        <v-icon color="primary" class="mr-1">{{
          allowCollaborationsIcon
        }}</v-icon>
        <v-icon
          v-if="program.private"
          color="primary"
          class="ml-auto cursor-pointer"
          @click="goToProgramInvite(program)"
          >mdi-account-plus</v-icon
        >
      </div>
      <small class="text-accent">{{ program.status }}</small>
      <v-hover>
        <template #default="{ hover }">
          <v-img
            :src="program.banner || '/img/dummy.jpg'"
            :max-width="$vuetify.breakpoint.mobile ? '100%' : '100%'"
            class="rounded mt-1 cursor-pointer"
            :class="{ 'img-on-hover': hover }"
            @click="goEdit(program)"
          >
            <span class="img-text px-2"> Click image to edit </span>
          </v-img>
        </template>
      </v-hover>
      <section class="mt-2">
        <v-chip small> {{ program.type }} </v-chip>
        <p class="my-2">
          <span class="text-black">Reward: </span>
          <span class="text-primary">{{ displayReward(program.reward) }}</span>
        </p>
        <div class="flex">
          <v-alert
            class="fit-content d-inline-block !p-2 mt-2 mb-1 !text-sm white--text text-center cursor-pointer"
            color="accent"
            dense
            @click="viewSubmissions(program)"
          >
            View Submissions
          </v-alert>
          <v-alert
            class="fit-content d-inline-block !p-2 mt-2 mb-1 ml-auto !text-sm white--text text-center cursor-pointer"
            color="info"
            dense
            @mouseenter="reveal = true"
          >
            Quick View
          </v-alert>
        </div>
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
    viewSubmissions(program) {
      this.$router.push(`/program/${program._id}/submissions`)
    },

    goEdit(program) {
      this.$router.push(`/program/${program._id}/edit`)
    },
    goToProgramInvite(program) {
      this.$router.push(`/program/${program._id}/invite`)
    },
    displayReward(rawReward) {
      if (isNaN(+rawReward)) return rawReward
      return `$${rawReward} per vulnerability`
    },
  },
}
</script>

<style scoped lang="scss">
.hover {
  cursor: pointer;
}
.v-image {
  opacity: 0.8;
}
.img-text {
  display: none;
}
.img-on-hover {
  opacity: 1;
  span {
    display: initial;
  }
}
</style>
