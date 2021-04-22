<template>
  <div class="pa-4">
    <v-form ref="formCompanyInfo">
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.name"
            :rules="[...rules.name]"
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
            v-model="FORM.company.vatNumber"
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
            v-model.trim="FORM.company.businessType"
            :rules="[...rules.required]"
            placeholder="Business Type"
            label="Business Type"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.staffStrength"
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
                v-model="FORM.company.phoneNumber.countryCode"
                outlined
                :rules="[...rules.required]"
                class="pa-0"
                label="Dial Code"
                :items="countryCodes"
                item-value="dial_code"
                :item-text="(item) => `${item.flag} +${item.dial_code}`"
              ></v-autocomplete>
            </v-col>

            <v-col cols="8" class="py-0 pl-0 pr-1">
              <v-text-field
                v-model="FORM.company.phoneNumber.phoneNumber"
                block
                outlined
                :rules="[...rules.phone]"
                placeholder="08012345603"
                label="Phone Number"
                type="number"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.company.email"
            block
            outlined
            :rules="[...rules.email]"
            label="Company E-mail"
            placeholder="e-mail@example.com"
            type="email"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.website"
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
            :rules="[...rules.required]"
            placeholder="optional"
            label="Postal Code"
            outlined
            block
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
import countryCodesJSON from '~/assets/json/countryCodes.json'
import industriesJSON from '~/assets/json/industries.json'

export default {
  data() {
    return {
      FORM: {
        company: { phoneNumber: {} },
      },

      USER: this.$store.state.auth.user,

      countries: countriesJSON,
      industries: industriesJSON,
      countryCodes: countryCodesJSON,

      rules: {
        required: [(value) => !!value || 'This Field Is Required'],
        name: [
          (v) => !!v || 'Company name is required',
          (v) =>
            (v && v.length <= 100) || 'Name must be less than 100 characters',
        ],
        phone: [
          (v) => !!v || 'Phone number is required',
          (v) =>
            !v ||
            /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
              v
            ) ||
            'Invalid Phone number',
        ],
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
    async updateProfile() {
      if (this.$refs.formCompanyInfo.validate()) {
        this.$nuxt.$loading.finish()

        const URL = `/update-profile`
        // Make upload request to the API
        await this.$axios
          .$patch(URL, this.FORM)
          .then(() => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Profile Updated',
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
            this.$nuxt.$loading.finish()
          })
      }
    },
  },
}
</script>
