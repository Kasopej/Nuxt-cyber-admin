<template>
  <div>
    <!-- <div
      class="primary pt-10"
      style="background: linear-gradient(to right, #c504da, #6921b6)"
    ></div> -->

    <v-main
      class="primary pt-60"
      style="
        background: linear-gradient(to right, #c504da, #6921b6);
        padding-top: 8rem;
      "
    >
      <v-container>
        <div class="white settings-main rounded-lg pa-2 pa-md-8 mx-1">
          <v-tabs :value="settingsTab" class="settings-tabs" grow>
            <v-tab
              class="text-capitalize"
              :append="true"
              :to="prependAdminRoute + '/account/settings#general'"
              >Manage Profile</v-tab
            >
            <v-tab
              class="text-capitalize"
              :append="true"
              :to="prependAdminRoute + '/account/settings#researchers'"
              >Manage Team</v-tab
            >

            <v-tabs-items :value="settingsTab">
              <v-tab-item>
                <profile-general :hash="hash" />
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
import AccountsBaseDef from 'PageBases/AccountSettings'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth/companyAuth')
export default {
  extends: AccountsBaseDef,
  layout: 'dashboard',
  middleware: 'auth',
  computed: {
    ...mapGetters({ profile: 'getAccount' }),
  },
}
</script>

<style scoped>
/* .settings-main {
  margin-top: -150px;
} */
</style>
