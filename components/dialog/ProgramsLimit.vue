<template>
  <div class="text-center">
    <v-dialog v-model="popProgramLimitModal" persistent width="350">
      <v-card class="mt-4">
        <v-card-title class="text-h6 text-capitalize text-red-500">
          Program Limit Reached
        </v-card-title>
        <v-card-text> You cannot create more than 3 programs </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('program', ['popProgramLimitModal']),
  },
  methods: {
    closeDialog() {
      this.$store.commit('program/TOGGLE_PROGRAM_LIMIT_ALERT', false)
    },
  },
}
</script>
