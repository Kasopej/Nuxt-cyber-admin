<template>
  <v-form ref="invitationForm">
    <v-row class="py-8">
      <v-col cols="12" sm="6" class="py-0">
        <v-select
          outlined
          label="Select a Role"
          :items="roles"
          item-text="title"
          item-value="value"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field
          block
          outlined
          label="E-mail"
          placeholder="e-mail@example.com"
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
      roles: [
        { title: 'Report XX Auditor', value: 'auditor' },
        { title: 'Report Viewer', value: 'viewer' },
        { title: 'Report Contributor', value: 'contributor' },
      ],
      FORM: {},
    }
  },

  methods: {
    sendInvitation() {
      this.$store.commit('notification/SHOW', {
        color: 'accent',
        text: 'Feature under construction',
      })
    },
  },
}
</script>
