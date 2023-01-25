<template>
  <div class="pa-4">
    <v-form v-if="FORM" ref="formCompanyInfo">
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.companyName"
            :rules="[...rules.name]"
            placeholder="Company Name"
            label="Company Name"
            block
            :solo="!!FORM.companyName"
            :disabled="!!FORM.companyName"
            outlined
            @change="selectField('companyName', $event)"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model.trim="FORM.industry"
            :rules="[...rules.required]"
            :items="industries"
            label="Industry Type"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.vatNumber"
            :rules="[...rules.required]"
            :solo="!!FORM.vatNumber"
            :disabled="!!FORM.vatNumber"
            placeholder="0123456789"
            label="VAT Number"
            type="number"
            outlined
            block
            @change="selectField('vatNumber', $event.trim())"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.registrationNumber"
            :solo="!!FORM.registrationNumber"
            :disabled="!!FORM.registrationNumber"
            block
            outlined
            :rules="[...rules.required]"
            label="Registration Number"
            placeholder="1234567890"
            @change="selectField('registrationNumber', $event.trim())"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.businessType"
            :rules="[...rules.required]"
            placeholder="Business Type"
            label="Business Type"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.staffSize"
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
                v-model="FORM.phoneNumber.countryCode"
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
                v-model="FORM.phoneNumber.phoneNumber"
                block
                outlined
                :rules="[...rules.phone]"
                placeholder="08012345603"
                label="Phone Number"
                type="tel"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.companyEmail"
            block
            outlined
            :solo="!!FORM.companyEmail"
            :disabled="!!FORM.companyEmail"
            :rules="[...rules.email]"
            label="Company E-mail"
            placeholder="e-mail@example.com"
            type="email"
            @change="selectField('companyEmail', $event)"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.companyWebsite"
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
            :value="FORM.country"
            :solo="!!FORM.country"
            :disabled="!!FORM.country"
            block
            outlined
            :rules="[...rules.required]"
            :items="countries"
            label="Country"
            @change="selectField('country', $event)"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.city"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="Lagos"
            label="City"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.address"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="123, Ikorodu Road"
            label="Address"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.postalCode"
            :rules="[...rules.required]"
            placeholder="optional"
            label="Postal Code"
            outlined
            block
          />
        </v-col>
      </v-row>

      <div>
        <v-btn color="primary" @click="updateProfile"> Save Changes </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import countriesJSON from '~/assets/json/countries.json'
import countryCodesJSON from '~/assets/json/countryCodes.json'
import industriesJSON from '~/assets/json/industries.json'

export default {
  data() {
    return {
      countries: countriesJSON,
      industries: industriesJSON,
      countryCodes: countryCodesJSON,

      FORM: {},

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
            (!!v &&
              /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
                v
              )) ||
            'Invalid Phone number',
        ],
        email: [
          (v) => !!v || 'E-mail is required',
          (v) =>
            (!!v && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) ||
            'E-mail must be valid',
        ],
      },
    }
  },

  computed: {
    ...mapGetters('auth', { profile: 'getUserProfile' }),
  },

  beforeMount() {
    const { companyActualNumber, companyCountryCode } =
      this.formatReceivedPhone()
    this.FORM = {
      ...this.profile.company[0],
      phoneNumber: {
        phoneNumber: companyActualNumber,
        countryCode: companyCountryCode,
      },
    }
  },

  methods: {
    formatReceivedPhone() {
      if (typeof this.profile.company[0].phoneNumber !== 'string')
        return {
          companyActualNumber: this.profile.company[0].phoneNumber.phoneNumber,
          companyCountryCode: this.profile.company[0].phoneNumber.countryCode,
        }

      // strip "+" from number
      const numberWithoutPlus = this.profile.company[0].phoneNumber.substring(1)
      const companyCountryCode = countryCodesJSON.find((countryCodeObj) => {
        return numberWithoutPlus.startsWith(countryCodeObj.dial_code)
      }).dial_code

      const beginningOfActualNumber =
        numberWithoutPlus.indexOf(companyCountryCode) +
        companyCountryCode.length
      const companyActualNumber = numberWithoutPlus.substring(
        beginningOfActualNumber
      )

      return { companyActualNumber, companyCountryCode }
    },
    selectField(field, value) {
      if (this.FORM[field]) return
      this.FORM[field] = value
    },
    updateProfile() {
      if (this.$refs.formCompanyInfo.validate()) {
        this.$nuxt.$loading.finish()

        const URL = `/update-profile`
        // Make upload request to the API
        const payload = {
          company: this.FORM,
          representative: this.profile.representative[0],
          billing: this.profile.billing[0],
        }

        this.getHTTPClient()
          .$put(URL, payload)
          .then((response) => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Profile Updated',
            })
            this.$store.dispatch('auth/UPDATE_USER_PROFILE', response)
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
