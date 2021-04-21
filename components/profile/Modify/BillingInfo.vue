<template>
  <div class="pa-4">
    <section>
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.currency"
            block
            outlined
            label="Wallet Currency"
            :rules="[...rules.required]"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.accounting"
            block
            outlined
            label="Accounting"
            :rules="[...rules.required]"
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
                :items="countryCodes"
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
            v-model="FORM.billing.email"
            block
            outlined
            label="Email"
            type="email"
            :rules="[...rules.email]"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model="FORM.billing.country"
            block
            outlined
            :rules="[...rules.required]"
            :items="countries"
            label="Country"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.billing.city"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="Lagos"
            label="City"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.billing.address"
            block
            outlined
            :rules="[...rules.required]"
            placeholder="123, Ikorodu Road"
            label="Address"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model.trim="FORM.billing.postalCode"
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
    </section>
  </div>
</template>

<script>
import countriesJSON from '~/assets/json/countries.json'
import countryCodesJSON from '~/assets/json/countryCodes.json'

export default {
  data() {
    return {
      USER: this.$store.state.auth.user,
      FORM: {
        company: {},
        readOnly: true,
        representative: {},
        billing: { phoneNumber: {} },
      },

      countries: countriesJSON,
      countryCodes: countryCodesJSON,

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

  methods: {
    updateProfile() {
      if (this.FORM.readOnly) {
        this.FORM.readOnly = !this.FORM.readOnly
      } else {
        console.log(JSON.stringify(this.FORM))

        this.$store.commit('notification/SHOW', {
          color: 'accent',
          text: 'Feature under construction',
        })
      }
    },
  },
}
</script>
