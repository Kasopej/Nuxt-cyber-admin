<template>
  <div class="pa-4">
    <v-form ref="formCompanyInfo">
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.name"
            :rules="[...rules.required]"
            placeholder="Company Name"
            label="Company Name"
            block
            outlined
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model.trim="FORM.company.industry"
            :rules="[...rules.required]"
            :items="industries"
            label="Industry Type"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.vat"
            :rules="[...rules.required]"
            placeholder="0123456789"
            label="VAT Number"
            type="number"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.registrationNumber"
            block
            outlined
            :rules="[...rules.required]"
            label="Registration Number"
            placeholder="1234567890"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.business"
            block
            outlined
            :rules="[...rules.required]"
            label="Business Type"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.staffStrenght"
            block
            outlined
            :rules="[...rules.required]"
            type="number"
            label="Staff Strength"
            placeholder="10"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-row no-gutters>
            <v-col cols="4" class="py-0 pl-0 pr-1">
              <v-autocomplete
                v-model="FORM.billing.phoneNumber.countryCode"
                outlined
                :rules="[...rules.required]"
                class="pa-0"
                label="Dial Code"
                :items="countries"
                item-value="dial_code"
                :item-text="(item) => `${item.flag} +${item.dial_code}`"
                @keyup.enter="signup()"
              ></v-autocomplete>
            </v-col>

            <v-col cols="8" class="py-0 pl-0 pr-1">
              <v-text-field
                v-model="FORM.billing.phoneNumber.phoneNumber"
                block
                outlined
                :rules="[...rules.required]"
                placeholder="08012345603"
                label="Phone Number"
                type="number"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.billing.email"
            block
            outlined
            :rules="[...rules.required]"
            label="Company E-mail"
            placeholder="e-mail@example.com"
            type="email"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.website"
            block
            outlined
            :rules="[...rules.required]"
            label="Company Website"
            placeholder="https://example.com"
            type="url"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model="FORM.company.country"
            block
            outlined
            :rules="[...rules.required]"
            :items="countries"
            label="Country"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.city"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="Lagos"
            label="City"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.address"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="123, Ikorodu Road"
            label="Address"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.postalCode"
            block
            outlined
            :rules="[...rules.required]"
            label="Postal Code"
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
import countriesJSON from '~/assets/json/countries.json'
import industriesJSON from '~/assets/json/industries.json'

export default {
  data() {
    return {
      FORM: {
        readOnly: true,
        company: {},
        representative: {},
        billing: { phoneNumber: {} },
      },

      USER: this.$store.state.auth.user,
      industries: industriesJSON,
      countries: countriesJSON,

      rules: {
        required: [(value) => !!value || 'This Field Is Require'],
      },
    }
  },

  methods: {
    updateProfile() {
      if (this.$refs.formCompanyInfo.validate()) {
        console.log(JSON.stringify(this.FORM))

        this.$store.commit('notification/SHOW', {
          color: 'accent',
          text: 'Oops! Something Went wrong. . .',
        })
      }
    },
  },
}
</script>
