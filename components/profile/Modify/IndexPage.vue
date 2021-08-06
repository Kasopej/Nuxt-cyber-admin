<template>
  <div class="pa-md-4">
    <div class="d-flex">
      <label class="pt-8">
        <v-avatar size="250">
          <v-img
            :src="
              FILE_BLOB || USER.account.company[0].image || '/images/dummy.jpg'
            "
            class="rounded"
            contain
          />
        </v-avatar>
        <small
          class="d-block grey--text text-center pt-3"
          style="width: 250px"
          >{{ labelText }}</small
        >
        <v-file-input
          v-model="FILE"
          class="d-none"
          accept="image/jpeg, image/png"
          @change="uploadPhoto($event)"
        />
      </label>
    </div>

    <section class="py-8">
      <v-tabs v-model="profileEditTab" color="accent" grow>
        <v-tab class="text-capitalize">
          <v-icon class="mr-3">mdi-contacts</v-icon>
          <span>
            Company
            <span class="d-none d-md-inline ml-2">Information</span></span
          >
        </v-tab>
        <v-tab class="text-capitalize">
          <v-icon class="mr-3">mdi-account-edit</v-icon>
          <span>
            Representative
            <span class="d-none d-md-inline ml-2">Information</span></span
          ></v-tab
        >
        <v-tab class="text-capitalize">
          <v-icon class="mr-3">mdi-credit-card-settings</v-icon>
          <span>
            Billing <span class="d-none d-md-inline ml-2">Information</span>
          </span>
        </v-tab>

        <v-tabs-items v-model="profileEditTab" class="pt-8">
          <v-tab-item>
            <profile-modify-company-info />
          </v-tab-item>
          <v-tab-item>
            <profile-modify-representative-info />
          </v-tab-item>
          <v-tab-item>
            <profile-modify-billing-info />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelText: 'Click to change',
      FORM: { readOnly: true, company: {}, representative: {}, billing: {} },

      profileEditTab: 0,
      FILE: null,
      FILE_BLOB: null,

      USER: this.$store.state.auth.user,
    }
  },

  mounted() {
    console.log(this.USER)
  },

  methods: {
    async uploadPhoto(event) {
      if (this.FILE) {
        this.labelText = 'Please wait...'

        // Convert photo to base64 format (i.e data url)
        // the image is from the user object from the login endpoint
        // once the company details api is provided that will be used
        const formData = new FormData()
        formData.append('file', this.FILE)
        formData.append('userId', this.USER.id)
        this.FILE_BLOB = URL.createObjectURL(this.FILE)

        const endpoint = '/update-profile-picture'
        await this.$axios
          .$patch(endpoint, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then(() => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Picture changed Successfully',
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

        // const URLL = ``
        // // Make upload request to the API
        // await this.$axios
        //   .$put(URLL, formData)
        //   .then(() => {
        //     this.labelText = 'Photo changed successfully!'
        //   })
        //   .catch((e) => {
        //     //
        //   })
        //   .finally(() => {
        //     // Close the loader
        //   })
      }
    },

    updateProfile() {
      if (this.FORM.readOnly) {
        this.FORM.readOnly = !this.FORM.readOnly
      } else {
        console.log(JSON.stringify(this.FORM))

        this.$store.commit('notification/SHOW', {
          color: 'accent',
          text: 'Feature under construction',
        })
      }
    },
  },
}
</script>
