<template>
  <v-app>
    <template v-if="$fetchState.pending">
      <section class="h-screen flex justify-center items-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="70"
          width="8"
        ></v-progress-circular>
      </section>
    </template>
    <template v-else>
      <partials-mobile-navigation-drawer :links="links" />

      <section
        style="min-height: 100vh"
        class="d-flex flex-column overflow-y-hidden"
      >
        <partials-navigation-bar :links="links" />
        <main class="flex-grow-1 mt-32">
          <v-select
            class="w-1/2 sm:w-1/4"
            outlined
            :value="managedCompany"
            :items="allCompanies"
            :item-text="(item) => item.company[0].companyName"
            item-value="_id"
            return-object
            label="Select a Company"
            @input="SELECT_COMPANY_ACCOUNT"
          ></v-select>
          <template v-if="managedCompany">
            <nuxt class="overflow-y-auto" />
          </template>
          <partials-empty-data v-else caption="You must select a company" />
        </main>
      </section>

      <partials-notification-toast />
      <dialog-go-twofa />
      <dialog-payment />
      <dialog-subscription-expiry />
      <dialog-programs-limit />
    </template>
  </v-app>
</template>

<script>
import { createNamespacedHelpers, mapState } from 'vuex'
import { debounce } from '~/utils/general'
const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers('auth')
const mapRootState = mapState

const debouncedWake = debounce(wake, 5000)
function wake({ newState }) {
  if (newState === 'active') {
    if (new Date().valueOf() > this.startTime.valueOf() + 3600000) this.$fetch()
    else this.startTime = new Date()
  }
}

export default {
  middleware: 'admin_auth',
  data() {
    return {
      startTime: new Date(),
      allCompanies: [],
      managedCompany: null,
    }
  },
  async fetch() {
    const URL = '/getAllCompanies'
    // Make upload request to the API
    await this.getHTTPClient()
      .$get(URL)
      .then((res) => {
        this.allCompanies = res.companies
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Session Expired. Please log in',
        })
        this.LOG_USER_OUT()
        this.$router.replace(this.prependAdminRoute + '/account/login')
      })
  },
  computed: {
    ...mapGetters(['isAdminAuth']),
    // ...mapGetters({ managedCompany: 'adminAuth/managedCompanyAccount' }),
    ...mapRootState('preferences', ['darkMode']),
    // ...mapRootState('auth/adminAuth', {
    //   managedCompany: (state) => state.data.company,
    // }),
    links() {
      return [
        {
          title: 'Programs',
          icon: 'mdi-briefcase',
          slug: this.prependAdminRoute + '/program/',
        },
        {
          title: 'Submissions',
          icon: 'mdi-bookshelf',
          slug: this.prependAdminRoute + '/submissions/',
        },
        {
          title: 'Profile',
          icon: 'mdi-account',
          slug: this.prependAdminRoute + '/account/settings/',
        },
      ]
    },
    themeBinding() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  watch: {
    darkMode: {
      handler(val) {
        this.$vuetify.theme.dark = val
      },
      immediate: true,
    },
    managedCompany() {
      this.$fetch()
    },
  },
  created() {
    this.UNSELECT_COMPANY_ACCOUNT()
  },
  mounted() {
    window.lifecycle.addEventListener('statechange', debouncedWake.bind(this))
  },
  methods: {
    ...mapActions(['UPDATE_USER_PROFILE']),
    ...mapMutations(['LOG_USER_OUT']),
    // ...mapMutations({
    //   SELECT_COMPANY_ACCOUNT: 'adminAuth/SELECT_COMPANY_ACCOUNT',
    //   UNSELECT_COMPANY_ACCOUNT: 'adminAuth/UNSELECT_COMPANY_ACCOUNT',
    // }),
    SELECT_COMPANY_ACCOUNT(companyObject) {
      this.$vueBus.$emit('company-selected', companyObject)
      this.managedCompany = companyObject
      this.$vueBus.companyAccount = companyObject
    },
    UNSELECT_COMPANY_ACCOUNT() {
      this.$vueBus.$emit('company-unselected')
      this.$vueBus.companyAccount = {}
    },
  },
}
</script>

<style lang="scss" scoped>
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';

.pg-root {
  display: flex;
  position: relative;
  min-height: 100vh;
}
.min-full-height {
  min-height: 100vh;
}
</style>
