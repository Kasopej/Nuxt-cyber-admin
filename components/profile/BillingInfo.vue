<template>
  <div class="pa-4">
    <v-form v-if="FORM" ref="formBillingInfo">
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.currency"
            block
            outlined
            :filled="!!FORM.currency"
            :disabled="!!FORM.currency"
            label="Wallet Currency"
            :rules="[...rules.required]"
            @change="selectField('currency', $event.trim())"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.accounting"
            block
            outlined
            :filled="!!FORM.accounting"
            :disabled="!!FORM.accounting"
            label="Accounting"
            :rules="[...rules.required]"
            @change="selectField('currency', $event.trim())"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.phoneNumber"
            :rules="[...rules.phone]"
            placeholder="08012345603"
            label="Phone Number"
            type="tel"
            outlined
            block
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.email"
            :rules="[...rules.email]"
            label="Email"
            type="email"
            outlined
            :filled="!!FORM.email"
            :disabled="!!FORM.email"
            block
            @change="selectField('email', $event)"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            :value="FORM.country"
            :rules="[...rules.required]"
            :items="countries"
            label="Country"
            outlined
            :filled="!!FORM.country"
            :disabled="!!FORM.country"
            block
            @change="selectField('country', $event)"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.city"
            :rules="[...rules.required]"
            placeholder="Lagos"
            label="City"
            outlined
            :filled="!!FORM.city"
            :disabled="!!FORM.city"
            block
            @change="selectField('city', $event.trim())"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.address"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="123, Ikorodu Road"
            :filled="!!FORM.address"
            :disabled="!!FORM.address"
            label="Address"
            @change="selectField('address', $event.trim())"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            :value="FORM.postalCode"
            :rules="[...rules.required]"
            placeholder="optional"
            label="Postal Code"
            outlined
            :filled="!!FORM.postalCode"
            :disabled="!!FORM.postalCode"
            block
            @change="selectField('postalCode', $event.trim())"
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
import { mapGetters } from 'vuex'
import countriesJSON from '~/assets/json/countries.json'
import countryCodesJSON from '~/assets/json/countryCodes.json'

export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      countries: countriesJSON,
      countryCodes: countryCodesJSON,

      FORM: {},

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
            !!v ||
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
    ...mapGetters('auth', { profile: 'getAccount' }),
  },

  mounted() {
    this.FORM = { ...this.profile.billing[0] }
    // this.FORM.phoneNumber = {}
  },

  methods: {
    async updateProfile() {
      if (this.$refs.formBillingInfo.validate()) {
        this.$nuxt.$loading.finish()

        const URL = `/update-profile`
        // Make upload request to the API
        const payload = {
          company: this.profile.company[0],
          representative: this.profile.representative[0],
          billing: this.FORM,
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
