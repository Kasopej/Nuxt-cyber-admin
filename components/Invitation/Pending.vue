<template>
  <main class="py-8">
    <template v-if="pendingInvites.length">
      <section v-for="user in pendingInvites" :key="user.id">
        <div
          class="d-flex flex-wrap justify-space-between align-center w-100 py-3"
        >
          <div>{{ user.username }}</div>
          <div>
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
  props: {
    pendingInvites: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },

  methods: {
    async acceptUser(username) {
      this.$nuxt.$loading.finish()

      const URL = `/accept-member`
      // Make upload request to the API
      await this.getHTTPClient()
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
      await this.getHTTPClient()
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
