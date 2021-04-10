<template>
  <div class="pa-4">
    <div class="pt-8">
      <label>
        <v-img
          :src="FILE_BLOB || USER.image || '/images/dummy.jpg'"
          class="rounded"
          width="250"
          contain
        />
        <small class="grey--text text-center pt-3">{{ labelText }}</small>
        <v-file-input
          v-model="FILE"
          class="d-none"
          accept="image/jpeg, image/png"
          @change="uploadPhoto()"
        />
      </label>
    </div>

    <section>
      <v-tabs v-model="profileEditTab" color="accent" class="py-8">
        <v-tab class="text-capitalize">
          <v-icon class="mr-3">mdi-contacts-outline</v-icon>
          <span> Company Information</span>
        </v-tab>
        <v-tab class="text-capitalize">
          <v-icon class="mr-3">mdi-account-edit-outline</v-icon>
          <span> Representative Information</span></v-tab
        >
        <v-tab class="text-capitalize">
          <v-icon class="mr-3">mdi-credit-card-settings-outline</v-icon>
          <span> Information </span>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="profileEditTab">
        <v-tab-item>
          <profile-modify-contact-info />
        </v-tab-item>
        <v-tab-item>
          <profile-modify-representative-info />
        </v-tab-item>
        <v-tab-item>
          <profile-modify-billing-info />
        </v-tab-item>
      </v-tabs-items>
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

  methods: {
    uploadPhoto() {
      if (this.FILE) {
        this.labelText = 'Please wait...'

        // Convert photo to base64 format (i.e data url)
        const formData = new FormData()
        formData.append('file', this.FILE)
        formData.append('userId', this.USER.id)
        this.FILE_BLOB = URL.createObjectURL(this.FILE)

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
