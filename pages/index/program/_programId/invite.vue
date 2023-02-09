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
        <v-tab-item> <invitation-pending /> </v-tab-item>
        <v-tab-item> <invitation-accepted /> </v-tab-item>
        <v-tab-item> <invitation-revoked /> </v-tab-item
      ></v-tabs-items>
    </div>
  </div>
</template>

<script>
import InviteManagementBase from '~/components/pages_base_definitions/InviteMangementBase'
export default {
  mixins: [InviteManagementBase],
}
</script>
