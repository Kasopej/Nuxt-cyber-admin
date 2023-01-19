<template>
  <div class="pa-4">
    <v-form v-if="FORM" ref="formBillingInfo">
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.currency"
            block
            outlined
            label="Wallet Currency"
            :rules="[...rules.required]"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.accounting"
            block
            outlined
            label="Accounting"
            :rules="[...rules.required]"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.phoneNumber"
            :rules="[...rules.phone]"
            placeholder="08012345603"
            label="Phone Number"
            type="number"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.email"
            :rules="[...rules.email]"
            label="Email"
            type="email"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model="FORM.country"
            :rules="[...rules.required]"
            :items="countries"
            label="Country"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.city"
            :rules="[...rules.required]"
            placeholder="Lagos"
            label="City"
            outlined
            block
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
        <v-btn color="primary" @click="updateProfile()"> Save Changes </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import countriesJSON from '~/assets/json/countries.json'
import countryCodesJSON from '~/assets/json/countryCodes.json'

export default {
  data() {
    return {
      countries: countriesJSON,
      countryCodes: countryCodesJSON,

      FORM: { phoneNumber: {} },

      rules: {
        required: [(value) => !!value || 'This Field Is Required'],
        name: [
          (v) => !!v || 'Name is required',
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

  mounted() {
    this.FORM = { ...this.$store.state.auth.user.account.billing[0] }
    // this.FORM.phoneNumber = {}
  },

  methods: {
    async updateProfile() {
      if (this.$refs.formBillingInfo.validate()) {
        this.$nuxt.$loading.finish()

        const URL = `/update-profile`
        // Make upload request to the API
        const payload = {
          company: this.$store.state.auth.user.account.company[0],
          representative: this.$store.state.auth.user.account.representative[0],
          billing: this.FORM,
        }

        await this.getHTTPClient()
          .$put(URL, payload)
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
