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
        <v-tab-item>
          <invitation-invite-new
            :invite-url="inviteURL"
            @invitation-made="loadPendingInvites"
        /></v-tab-item>
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
          <invitation-pending
            :pending-invites="pendingInvites"
            :revoke-url="revokeURL"
            @mount-invite-tab="loadInvites"
          />
        </v-tab-item>
        <v-tab-item>
          <invitation-accepted
            :accepted-invites="acceptedInvites"
            :revoke-url="revokeURL"
            @mount-invite-tab="loadInvites"
          />
        </v-tab-item>
        <v-tab-item>
          <invitation-revoked
            :revoked-invites="revokedInvites"
            :invite-url="inviteURL"
            @mount-invite-tab="loadInvites"
          /> </v-tab-item
      ></v-tabs-items>
    </div>
  </div>
</template>

<script>
import InviteManagementBase from '~/components/pages_base_definitions/InviteMangementBase'
import { needsProgramDataOnLoad } from '~/plugins/mixins'
export default {
  extends: InviteManagementBase,
  mixins: [needsProgramDataOnLoad],
  computed: {
    programID() {
      return this.$route.params.programId
    },
    revokeURL() {
      return `/remove-from-private-program/${this.programID}`
    },
    inviteURL() {
      return `/invite-to-private-program/${this.programID}`
    },
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
    async loadRevokedInvites() {
      // need endpoint to get revoked invites
      this.revokedInvites = await Promise.resolve([
        { id: 0, username: 'lvvjxbpunpi' },
        { id: 1, username: 'olajide.a.hammed' },
        { id: 2, username: 'xyz.lvvjxb.punpi' },
      ])
    },
    async loadAcceptedInvites() {
      // need endpoint to get accepted invites
      this.acceptedInvites = await Promise.resolve([
        { id: 0, email: 'olajide.a.hammed' },
        { id: 1, email: 'lvvjxbpunpi' },
        { id: 2, email: 'xyz.lvvjxb.punpi' },
      ])
    },
  },
}
</script>
