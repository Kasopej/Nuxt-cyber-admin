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
import InviteComponentBase from '../component_base_definitions/InviteComponentBase'
export default {
  mixins: [InviteComponentBase],
  props: {
    pendingInvites: {
      type: Array,
      default: () => [],
    },
    revokeUrl: {
      type: String,
      default: '',
    },
  },

  methods: {
    async revokeUser(username) {
      this.$nuxt.$loading.start()

      // Make upload request to the API
      await this.getHTTPClient()
        .$post(this.revokeUrl, { username })
        .then(() => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Invitation Revoked',
          })
          this.$emit('mount-invite-tab', this.$options.name)
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
