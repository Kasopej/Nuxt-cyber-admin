<template>
  <main class="py-8">
    <template v-if="revokedUsers.length > 1">
      <section v-for="user in revokedUsers" :key="user.id">
        <div
          class="d-flex flex-wrap justify-space-between align-center w-100 py-3"
        >
          <div>{{ user.username }}</div>
          <div>
            <v-btn small color="accent" class="text-capitalize mr-4"
              >Accept<v-icon small class="ml-3">mdi-check-all</v-icon></v-btn
            >
            <v-btn
              small
              color="red"
              outlined
              class="text-capitalize"
              @click="revokeUser(user.username)"
              >Revoke <v-icon small class="ml-3">mdi-cancel</v-icon></v-btn
            >
          </div>
        </div>
        <v-divider />
      </section>
    </template>

    <div v-else class="pa-8">No pending Invitations</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      revokedUsers: [
        { id: 0, username: 'ogbeni.hmmd' },
        { id: 1, username: 'abc.lvvjxbpunpi' },
        { id: 2, username: 'olajide.a.hammed' },
        { id: 3, username: 'xyz.lvvjxb.punpi' },
      ],
    }
  },

  methods: {
    async acceptUser(username) {
      this.$nuxt.$loading.finish()

      const URL = `/accept-member`
      // Make upload request to the API
      await this.$axios
        .$post(URL, { username })
        .then(() => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Invitation Accepted',
          })
        })
        .catch((error) => {
          this.$store.commit('notification/SHOW', {
            color: 'accent',
            icon: 'mdi-alert-outline',
            text: error.response
              ? error.response.data.message
              : "Sorry, that didn't work. Please try again",
          })
        })
        .finally(() => {
          this.$nuxt.$loading.finish()
        })
    },

    async revokeUser(username) {
      this.$nuxt.$loading.finish()

      const URL = `/revoke-member`
      // Make upload request to the API
      await this.$axios
        .$post(URL, { username })
        .then(() => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Invitation Revoked',
          })
        })
        .catch((error) => {
          this.$store.commit('notification/SHOW', {
            color: 'accent',
            icon: 'mdi-alert-outline',
            text: error.response
              ? error.response.data.message
              : "Sorry, that didn't work. Please try again",
          })
        })
        .finally(() => {
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>
