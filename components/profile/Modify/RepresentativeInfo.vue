<template>
  <div class="pa-4">
    <v-form v-if="FORM" ref="formRepresentativeInfo">
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.firstName"
            block
            outlined
            :rules="[...rules.name]"
            placeholder="First Name"
            label="First Name"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.lastName"
            block
            outlined
            :rules="[...rules.name]"
            placeholder="Last Name"
            label="Last Name"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.dateOfBirth"
            block
            outlined
            :rules="[...rules.required]"
            label="Date Of Birth"
            type="date"
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
                type="number"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.email"
            block
            outlined
            :rules="[...rules.email]"
            placeholder="e-mail@example.com"
            label="E-mail"
            type="email"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model="FORM.country"
            block
            outlined
            :rules="[...rules.required]"
            :items="countries"
            label="Country"
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
            v-model="FORM.postalCode"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="Optional"
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
import countryCodesJSON from '~/assets/json/countryCodes.json'

export default {
  data() {
    return {
      countries: countriesJSON,
      industries: industriesJSON,
      countryCodes: countryCodesJSON,

      FORM: { phoneNumber: {} },

      rules: {
        required: [(value) => !!value || 'This Field Is Required'],
        name: [
          (v) => !!v || 'This is required',
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
    this.FORM = { ...this.$store.state.auth.user.account.representative[0] }
    this.FORM.phoneNumber = {}
  },

  methods: {
    async updateProfile() {
      if (this.$refs.formRepresentativeInfo.validate()) {
        this.$nuxt.$loading.finish()

        const URL = `/update-profile`
        // Make upload request to the API
        await this.$axios
          .$put(URL, this.FORM)
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
