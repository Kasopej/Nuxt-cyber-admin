<template>
  <div class="pa-4">
    <div class="py-8">
      <div>{{ USER.name }}</div>
    </div>

    <header class="d-flex justify-space-between py-8">
      <div class="headline font-weight-bold accent--text">
        Company information
      </div>
      <v-btn color="primary">{{ FORM.readOnly ? 'Edit' : 'Update' }}</v-btn>
    </header>

    <v-row>
      <v-col v-for="i in 6" :key="i" col="12" md="6">
        <v-text-field block outlined :label="i" :readonly="FORM.readOnly" />
      </v-col>
    </v-row>

    <header class="headline font-weight-bold accent--text py-8">
      Billing information
    </header>

    <v-row>
      <v-col v-for="i in 6" :key="i" col="12" md="6">
        <v-text-field block outlined :label="i" :readonly="FORM.readOnly" />
      </v-col>
    </v-row>

    <header class="headline font-weight-bold accent--text py-8">
      Billing information
    </header>

    <v-row>
      <v-col v-for="i in 6" :key="i" col="12" md="6">
        <v-text-field block outlined :label="i" :readonly="FORM.readOnly" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FORM: { readOnly: true },

      USER: this.$store.state.auth.user,
    }
  },
}
</script>
