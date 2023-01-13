<template>
  <div>
    <partials-header :title="USER.account.firstName" />

    <v-main>
      <v-container>
        <div class="white mt-n16 rounded-lg pa-2 pa-md-4 pa-md-8 mx-1">
          <v-tabs v-model="tab" grow>
            <v-tab class="text-capitalize">Profile</v-tab>
            <v-tab class="text-capitalize">Researcher Management</v-tab>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <profile-modify-index-page />
              </v-tab-item>

              <v-tab-item>
                <profile-researcher-management />
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  layout: 'adminLayout',
  middleware: 'auth',

  data() {
    return {
      tab: 0,
      USER: this.$store.state.auth.user,
    }
  },
}
</script>
