<template>
  <div class="pa-2 pa-md-8 mt-16 mx-1">
    <div class="pt-8">
      <v-tabs v-model="tabInvitation">
        <v-tab class="text-capitalize"
          ><v-icon class="mr-3">mdi-account-plus</v-icon>Manage Program
          Hunters</v-tab
        >
      </v-tabs>

      <v-tabs-items v-model="tabInvitation" class="pt-4">
        <v-tab-item> <invitation-invite-new /></v-tab-item>
      </v-tabs-items>
    </div>

    <div class="py-8">
      <header class="headline font-weight-bold accent--text pb-4">
        Invitations
      </header>

      <v-tabs v-model="tabInvitations" grow>
        <v-tab class="text-capitalize"
          ><v-icon class="mr-3">mdi-account-clock</v-icon>Pending
          <span class="d-none d-md-inline ml-2">Invitations</span></v-tab
        >
        <v-tab class="text-capitalize"
          ><v-icon class="mr-3">mdi-account-check</v-icon>Accepted
          <span class="d-none d-md-inline ml-2">Invitations</span></v-tab
        >
        <v-tab class="text-capitalize"
          ><v-icon class="mr-3">mdi-account-remove</v-icon>Revoked
          <span class="d-none d-md-inline ml-2">Invitations</span></v-tab
        >
      </v-tabs>

      <v-tabs-items v-model="tabInvitations">
        <v-tab-item>
          <invitation-pending :pending-invites="pendingInvites" />
        </v-tab-item>
        <v-tab-item> <invitation-accepted /> </v-tab-item>
        <v-tab-item> <invitation-revoked /> </v-tab-item
      ></v-tabs-items>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import InviteManagementBase from '~/components/pages_base_definitions/InviteMangementBase'
const { mapState } = createNamespacedHelpers('program')
export default {
  mixins: [InviteManagementBase],
  computed: {
    ...mapState({ program: 'data' }),
  },
  methods: {
    async loadPendingInvites() {
      // need endpoint to get pending invites
      this.pendingInvites = await Promise.resolve([
        { id: 0, username: 'ogbeni.hmmd' },
        { id: 1, username: 'abc.lvvjxbpunpi' },
        { id: 2, username: 'olajide.a.hammed' },
        { id: 3, username: 'xyz.lvvjxb.punpi' },
      ])
    },
    async revokeUser(username) {
      this.$nuxt.$loading.start()

      const URL = `/remove-from-private-program/${this.program._id}`
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
