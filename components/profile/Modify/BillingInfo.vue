<template>
  <div class="pa-4">
    <section>
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.currency"
            block
            dense
            outlined
            label="Wallet Currency"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.accounting"
            block
            dense
            outlined
            label="Accounting"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.website"
            block
            dense
            outlined
            label="Website"
            type="url"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.ationality"
            block
            dense
            outlined
            label="Nationality"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.email"
            block
            dense
            outlined
            label="Email"
            type="email"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.postalCode"
            block
            dense
            outlined
            label="Postal Code"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.Country"
            block
            dense
            outlined
            label="country"
            :readonly="FORM.readOnly"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.phoneNumber"
            block
            dense
            outlined
            label="Phone Number"
            :readonly="FORM.readOnly"
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

        this.$store.commit('notification/SHOW', {
          color: 'accent',
          text: 'Feature under construction',
        })
      }
    },
  },
}
</script>
