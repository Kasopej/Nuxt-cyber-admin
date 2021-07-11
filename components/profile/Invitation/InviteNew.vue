<template>
  <v-form ref="invitationForm">
    <v-row class="py-8">
      <v-col cols="12" sm="6" class="py-0">
        <v-select
          v-model="FORM.role"
          outlined
          :items="roles"
          item-text="title"
          item-value="value"
          label="Select a Role"
          :rules="[...rules.required]"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field
          v-model="FORM.username"
          block
          outlined
          label="Username "
          :rules="[...rules.username]"
          placeholder="Username or e-mail@example.com"
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" @click="sendInvitation()">Send invitation</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      roles: ['Report Auditor', 'Report Viewer', 'Report Contributor'],
      FORM: {},
      rules: {
        required: [(value) => !!value || 'This field is required'],
        email: [
          (v) => !!v || 'E-mail is required',
          (v) =>
            !v ||
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            'E-mail must be valid',
        ],
      },
    }
  },

  methods: {
    async sendInvitation() {
      if (this.$refs.invitationForm.validate()) {
        const URLL = `/invite-member`
        // Make upload request to the API
        await this.$axios
          .$post(URLL, this.FORM)
          .then(() => {
            this.FORM = {}

            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Invitation Sent Successfully',
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
            // Close the loader
          })
      }
    },
  },
}
</script>
