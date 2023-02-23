<template>
  <v-form
    ref="signUpForm"
    v-model="valid"
    class="pa-3 pa-sm-4 col-12"
    @submit.prevent="signUp"
  >
    <nav class="text-center pb-4">
      Already have an account?
      <nuxt-link to="/account/login/">Sign In</nuxt-link>
    </nav>

    <header class="display-1 font-weight-bold text-center py-4">
      Create your <span class="success--text">Company</span> account
    </header>

    <section>
      <v-text-field
        v-model="FORM.companyName"
        dense
        required
        outlined
        label="Company Name"
        :rules="[...rules.name]"
      ></v-text-field>

      <v-text-field
        v-model="FORM.phoneNumber"
        dense
        required
        outlined
        label="Company Phone Number"
        placeholder="+2348123456789"
        :rules="[...rules.phone]"
      ></v-text-field>

      <v-text-field
        v-model="FORM.companyEmail"
        dense
        required
        outlined
        label="Company E-mail"
        placeholder="example@email.com"
        :rules="[...rules.email]"
      ></v-text-field>

      <v-text-field
        v-model="FORM.companyWebsite"
        dense
        required
        outlined
        label="Company Website"
        :rules="[...rules.required]"
        placeholder="https://www.google.com"
      ></v-text-field>

      <v-text-field
        v-model="FORM.password"
        dense
        required
        outlined
        password
        label="Password"
        :rules="[...rules.password]"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-text-field
        v-model="FORM.confirmPassword"
        dense
        required
        outlined
        password
        label="Confirm Password"
        :rules="[
          (value) =>
            value === FORM.password ||
            'The password confirmation does not match.',
        ]"
        :type="showConfirmPassword ? 'text' : 'password'"
        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showConfirmPassword = !showConfirmPassword"
      ></v-text-field>

      <partials-form-submit-btn
        color="primary"
        type="submit"
        text="Register"
        :progress="submittingForm"
      />
    </section>

    <div class="py-4">
      <v-checkbox v-model="FORM.acceptTerms" :rules="[...rules.required]">
        <template #label>
          <small>
            By clicking sign up, you hereby are in agreement with our
            <a href="https://www.teklabspace.com/terms-condition"
              >Terms &amp; Conditions</a
            >
            and
            <a href="https://www.teklabspace.com/code-of-conduct"
              >Code of conduct</a
            >
          </small>
        </template>
      </v-checkbox>
    </div>
  </v-form>
</template>

<script>
export default {
  layout: 'account',

  data() {
    return {
      FORM: {
        email: null,
        password: null,
        acceptTerms: false,
      },

      valid: true,
      submittingForm: false,
      showPassword: false,
      showConfirmPassword: false,

      rules: {
        required: [(value) => !!value || 'This field is required'],
        name: [
          (v) => !!v || 'Company name is required',
          (v) =>
            (v && v.length <= 100) || 'Name must be less than 100 characters',
        ],
        phone: [
          (v) => !!v || 'Company Phone number is required',
          (v) =>
            !v ||
            /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
              v
            ) ||
            'Invalid Phone number',
        ],
        email: [
          (v) => !!v || 'Company Email is required',
          (v) =>
            !v ||
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            'E-mail must be valid',
        ],
        password: [
          (value) => {
            const pattern =
              /^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[!@#$%^&*()--__=~`|'"{}+.]){1,}.{8,}$/
            return (
              pattern.test(value) ||
              'Min. 8 characters with at least one capital letter, a number and a special character.'
            )
          },
        ],
      },
    }
  },

  head: { title: 'Signup' },

  methods: {
    async signUp() {
      if (this.$refs.signUpForm.validate() && this.FORM.acceptTerms) {
        this.$nuxt.$loading.start()
        this.submittingForm = true

        const URL = `/register`
        const PAYLOAD = this.FORM

        await this.$axios
          .post(URL, PAYLOAD)
          .then((response) => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: `${response.data.message}.`,
              timeout: 20000,
            })
            this.$router.replace('/account/login')
          })
          .catch((error) => {
            this.submittingForm = false
            this.$store.commit('notification/SHOW', {
              color: 'accent',
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
