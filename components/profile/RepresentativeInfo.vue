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
          <v-text-field
            v-model="FORM.phoneNumber"
            block
            outlined
            :rules="[...rules.phone]"
            placeholder="2348012345603"
            label="Phone Number"
            type="tel"
          />
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
        <v-btn color="primary" @click="updateProfile"> Save Changes </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import countriesJSON from '~/assets/json/countries.json'
import industriesJSON from '~/assets/json/industries.json'
import countryCodesJSON from '~/assets/json/countryCodes.json'

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

  computed: {
    ...mapGetters('auth', { profile: 'getUserProfile' }),
  },

  mounted() {
    this.FORM = { ...this.profile.representative[0] }
    // this.FORM.phoneNumber = {}
  },

  methods: {
    async updateProfile() {
      if (this.$refs.formRepresentativeInfo.validate()) {
        this.$nuxt.$loading.finish()

        const URL = `/update-profile`
        // Make upload request to the API
        const payload = {
          company: this.profile.company[0],
          representative: this.FORM,
          billing: this.profile.billing[0],
        }
        await this.getHTTPClient()
          .$put(URL, payload)
          .then((response) => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Profile Updated',
            })
            this.$store.dispatch('auth/UPDATE_USER_PROFILE', response.data)
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
