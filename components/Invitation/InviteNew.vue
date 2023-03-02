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
          v-model="FORM.email"
          block
          outlined
          label="Email"
          :rules="[...rules.email]"
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
import {
  emailFieldValidator,
  requiredFieldValidator,
} from '~/utils/inputValidators'
export default {
  props: {
    inviteUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      roles: ['Report Auditor', 'Report Viewer', 'Report Contributor'],
      FORM: {},
      rules: {
        required: requiredFieldValidator,
        email: emailFieldValidator,
      },
    }
  },

  methods: {
    async sendInvitation() {
      if (this.$refs.invitationForm.validate()) {
        // Make upload request to the API
        await this.getHTTPClient()
          .$post(this.inviteUrl, this.FORM)
          .then(() => {
            this.FORM = {}

            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Invitation Sent Successfully',
            })
            this.$emit('invitation-made')
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
