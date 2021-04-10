<template>
  <v-form ref="invitationForm">
    <v-row class="py-8">
      <v-col cols="12" sm="6" class="py-0">
        <v-select
          outlined
          label="Select a Role"
          :items="['Report Auditor', 'Report Viewer', 'Report Contributor']"
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
