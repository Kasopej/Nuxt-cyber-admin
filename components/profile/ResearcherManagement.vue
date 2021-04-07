<template>
  <div>
    <div class="py-8">
      <v-tabs v-model="tabInvitation">
        <v-tab class="text-capitalize">Invite New Members</v-tab>
        <v-tab class="text-capitalize">Invite Members From the Group</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabInvitation">
        <v-tab-item> <profile-invitation-invite-new /></v-tab-item>
        <v-tab-item> <profile-invitation-invite-group /> </v-tab-item>
      </v-tabs-items>
    </div>

    <div class="py-8">
      <header class="headline font-weight-bold">Invitations</header>

      <v-tabs v-model="tabInvitations">
        <v-tab class="text-capitalize">Pending Invitations</v-tab>
        <v-tab class="text-capitalize">Accepted Invitations</v-tab>
        <v-tab class="text-capitalize">Revoked Invitations</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabInvitations">
        <v-tab-item> <profile-invitation-pending /> </v-tab-item>
        <v-tab-item> <profile-invitation-accepted /> </v-tab-item>
        <v-tab-item> <profile-invitation-revoked /> </v-tab-item
      ></v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabInvitation: 0,
      tabInvitations: 0,
    }
  },
}
</script>

<style></style>
