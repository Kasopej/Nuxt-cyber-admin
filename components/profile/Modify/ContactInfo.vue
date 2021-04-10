<template>
  <div class="pa-4">
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.name"
            block
            outlined
            label="Company Name"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.address"
            block
            outlined
            label="Address"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.type"
            block
            outlined
            label="Company Type"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.vat"
            block
            outlined
            label="VAT Number"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.city"
            block
            outlined
            label="City"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.postalCode"
            block
            outlined
            label="Postal Code"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.country"
            block
            outlined
            label="Country"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.registrationNumber"
            block
            outlined
            label="Registration Number"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.business"
            block
            outlined
            label="Business"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.identification"
            block
            outlined
            label="Identification (SIRET)"
            :readonly="FORM.readOnly"
          />
        </v-col>
      </v-row>

      <div>
        <v-btn color="primary" @click="updateProfile()"> Save Changes </v-btn>
      </div>
    </v-form>
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
