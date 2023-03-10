<template>
  <div class="pa-md-4">
    <div class="d-flex">
      <label class="pt-8 cursor-pointer">
        <v-avatar size="250">
          <v-img
            :src="FILE_BLOB || profile.company[0].image || '/images/dummy.jpg'"
            class="rounded"
            contain
          />
        </v-avatar>
        <small
          class="d-block text-gray-400 hover:text-accent text-center pt-3"
          style="width: 250px"
          >{{ labelText }}</small
        >
        <v-file-input
          v-model="FILE"
          class="d-none"
          accept="image/jpeg, image/png"
          @change="upload"
        />
      </label>
    </div>

    <section class="py-8 text-center">
      <v-tabs :value="profileEditTab" color="accent" grow show-arrows>
        <v-tab
          class="text-capitalize"
          :append="true"
          :to="prependAdminRoute + '/account/settings#company'"
        >
          <v-icon class="mr-3">mdi-contacts</v-icon>
          <span>
            Company
            <span class="d-none d-md-inline ml-2">Information</span></span
          >
        </v-tab>
        <v-tab
          class="text-capitalize"
          :append="true"
          :to="prependAdminRoute + '/account/settings#represenative'"
        >
          <v-icon class="mr-3">mdi-account-edit</v-icon>
          <span>
            Representative
            <span class="d-none d-md-inline ml-2">Information</span></span
          ></v-tab
        >
        <v-tab
          class="text-capitalize"
          :append="true"
          :to="prependAdminRoute + '/account/settings#billing'"
        >
          <v-icon class="mr-3">mdi-credit-card-settings</v-icon>
          <span>
            Billing <span class="d-none d-md-inline ml-2">Information</span>
          </span>
        </v-tab>

        <v-tab
          class="text-capitalize"
          :append="true"
          :to="prependAdminRoute + '/account/settings#security'"
        >
          <v-icon class="mr-3">mdi-lock-outline</v-icon>
          <span>
            Security <span class="d-none d-md-inline ml-2">settings</span>
          </span>
        </v-tab>

        <v-tabs-items :value="profileEditTab" class="pt-8">
          <v-tab-item>
            <profile-company-info :profile="profile" />
          </v-tab-item>
          <v-tab-item>
            <profile-representative-info :profile="profile" />
          </v-tab-item>
          <v-tab-item>
            <profile-billing-info :profile="profile" />
          </v-tab-item>
          <v-tab-item>
            <profile-security />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    hash: {
      type: String,
      default: '',
    },
    profile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      labelText: 'Click to change',
      FORM: { readOnly: true, company: {}, representative: {}, billing: {} },

      profileEditTab: 0,
      FILE: null,
      FILE_BLOB: null,
    }
  },

  watch: {
    hash(val) {
      switch (val) {
        case '#company':
          this.profileEditTab = 0
          break
        case '#represenative':
          this.profileEditTab = 1
          break
        case '#billing':
          this.profileEditTab = 2
          break
        case '#security':
          this.profileEditTab = 3
          break
        default:
          this.profileEditTab = 0
          break
      }
    },
  },

  methods: {
    upload() {
      if (this.FILE) {
        this.labelText = 'Please wait...'

        this.FILE_BLOB = URL.createObjectURL(this.FILE)
        const payload = { image: '' }

        const reader = new FileReader()
        reader.readAsDataURL(this.FILE)
        reader.onload = () => {
          setTimeout(() => {
            payload.image = reader.result
            this.uploadPhoto(payload)
          }, 3000)
        }
      }
    },

    async uploadPhoto(payload) {
      const endpoint = '/update-profile-picture'
      await this.getHTTPClient()
        .$patch(endpoint, payload)
        .then((res) => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Picture changed Successfully',
          })

          this.$store.commit('auth/SAVE_USER_PIC', res.data)

          this.labelText = 'Click to change'
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

    updateProfile() {
      if (this.FORM.readOnly) {
        this.FORM.readOnly = !this.FORM.readOnly
      } else {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          text: 'Feature under construction',
        })
      }
    },
  },
}
</script>

<style scoped>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(
    .v-slide-group--has-affixes
  )
  .v-slide-group__prev {
  display: unset !important;
  visibility: unset !important;
}
</style>
