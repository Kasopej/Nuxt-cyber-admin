<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    <div class="text-center pb-4">
      Already have an account?
      <nuxt-link to="/account/login/">Sign In</nuxt-link>
    </div>

    <header class="display-1 font-weight-bold text-center py-4">
      Create your <span class="success--text">Company</span> account
    </header>

    <v-form ref="signUpForm">
      <v-text-field
        v-model="FORM.name"
        dense
        outlined
        :rules="[rules.required]"
        label="Company Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="FORM.phone"
        dense
        required
        outlined
        :rules="[rules.required]"
        label="Company Phone Number"
        placeholder="+2348123456789"
      ></v-text-field>

      <v-text-field
        v-model="FORM.email"
        dense
        required
        outlined
        :rules="[rules.required]"
        label="Company E-mail"
        placeholder="example@email.com"
      ></v-text-field>

      <v-text-field
        v-model="FORM.website"
        dense
        required
        outlined
        label="Company Website"
        :rules="[rules.required]"
        placeholder="https://www.google.com"
      ></v-text-field>

      <v-text-field
        v-model="FORM.password"
        dense
        required
        outlined
        password
        label="Password"
        :rules="[rules.required]"
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

      <v-btn block color="primary" @click="signUp"> Sign Up </v-btn>
    </v-form>

    <div class="py-4">
      <v-checkbox v-model="FORM.acceptTerms" required>
        <template #label>
          <div>
            By clicking sign up, you hereby are in agreement with our
            <a href="https://www.teklabspace.com/terms-condition"
              >Terms &amp; Conditions</a
            >
            and
            <a href="https://www.teklabspace.com/code-of-conduct"
              >Code of conduct</a
            >
          </div>
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
      showPassword: false,
      showConfirmPassword: false,
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },

  head: { title: 'Signup' },

  methods: {
    async signUp() {
      if (this.$refs.signUpForm.validate() && this.FORM.acceptTerms) {
        this.$nuxt.$loading.start()
        console.log(this.FORM)

        const URL = `/register`
        const PAYLOAD = this.FORM

        await this.$axios
          .post(URL, PAYLOAD)
          .then((response) => {
            this.$router.replace('/')
          })
          .catch((error) => {
            this.notification = {
              status: true,
              color: 'error',
              text: error.response
                ? error.response.data.message
                : "Sorry, that didn't work. Please try again",
            }
          })
          .finally(() => {
            this.$nuxt.$loading.finish()
          })
      }
    },
  },
}
</script>
