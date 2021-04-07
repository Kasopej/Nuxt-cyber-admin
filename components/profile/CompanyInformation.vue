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
      <header class="d-flex justify-space-between py-8">
        <div class="headline font-weight-bold accent--text">
          Company information
        </div>
        <v-btn color="primary" @click="FORM.readOnly = !FORM.readOnly">
          {{ FORM.readOnly ? 'Edit' : 'Update' }}
        </v-btn>
      </header>

      <v-row>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.name"
            block
            outlined
            label="Company Name"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.address"
            block
            outlined
            label="Address"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.type"
            block
            outlined
            label="Company Type"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.vat"
            block
            outlined
            label="VAT Number"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.city"
            block
            outlined
            label="City"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.postalCode"
            block
            outlined
            label="Postal Code"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.country"
            block
            outlined
            label="Country"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.registrationNumber"
            block
            outlined
            label="Registration Number"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.business"
            block
            outlined
            label="Business"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.company.identification"
            block
            outlined
            label="Identification (SIRET)"
            :readonly="FORM.readOnly"
          />
        </v-col>
      </v-row>
    </section>

    <section>
      <header class="headline font-weight-bold accent--text py-8">
        Representative
      </header>

      <v-row>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.firstName"
            block
            outlined
            label="First Name"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.lastName"
            block
            outlined
            label="Last Name"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.dateOfBirth"
            block
            outlined
            label="Date Of Birth"
            type="date"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.nationality"
            blockrepresentative.
            outlined
            label="Nationality"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.email"
            block
            outlined
            label="E-mail"
            type="email"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.postalCode"
            block
            outlined
            label="Postal Code"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.representative.country"
            block
            outlined
            label="Country"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
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
    </section>

    <section>
      <header class="headline font-weight-bold accent--text py-8">
        Billing information
      </header>

      <v-row>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.currency"
            block
            outlined
            label="Wallet Currency"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.accounting"
            block
            outlined
            label="Accounting"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.website"
            block
            outlined
            label="Website"
            type="url"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.ationality"
            block
            outlined
            label="Nationality"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.email"
            block
            outlined
            label="Email"
            type="email"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.postalCode"
            block
            outlined
            label="Postal Code"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.Country"
            block
            outlined
            label="country"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="FORM.billing.phoneNumber"
            block
            outlined
            label="Phone Number"
            :readonly="FORM.readOnly"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelText: 'Click to change',
      FORM: { readOnly: true, company: {}, representative: {}, billing: {} },

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
  },
}
</script>
