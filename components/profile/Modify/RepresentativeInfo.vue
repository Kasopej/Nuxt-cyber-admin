<template>
  <div class="pa-4">
    <section>
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.firstName"
            block
            outlined
            label="First Name"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.lastName"
            block
            outlined
            label="Last Name"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.dateOfBirth"
            block
            outlined
            label="Date Of Birth"
            type="date"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.nationality"
            blockrepresentative.
            outlined
            label="Nationality"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.email"
            block
            outlined
            label="E-mail"
            type="email"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.postalCode"
            block
            outlined
            label="Postal Code"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.country"
            block
            outlined
            label="Country"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.representative.phoneNumber"
            block
            outlined
            label="Phone Number"
            type="tel"
            :readonly="FORM.readOnly"
          />
        </v-col>
      </v-row>

      <div>
        <v-btn color="primary" @click="updateProfile()"> Save Changes </v-btn>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FORM: { readOnly: true, company: {}, representative: {}, billing: {} },

      USER: this.$store.state.auth.user,
    }
  },

  methods: {
    updateProfile() {
      if (this.FORM.readOnly) {
        this.FORM.readOnly = !this.FORM.readOnly
      } else {
        console.log(JSON.stringify(this.FORM))
      }
    },
  },
}
</script>
