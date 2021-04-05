<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    <div class="text-center">
      Already have an account?
      <nuxt-link to="/account/login/">Sign In</nuxt-link>
    </div>

    <header class="display-1 font-weight-bold text-center py-4">
      Create your <span class="success--text">Company</span> account
    </header>

    <div>
      <v-text-field
        v-model="FORM.name"
        dense
        outlined
        :rules="[rules.required]"
        label="Company Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="FORM.phoneNumber"
        dense
        outlined
        :rules="[rules.required]"
        label="Company Phone Number"
        required
      ></v-text-field>

      <v-text-field
        v-model="FORM.email"
        dense
        outlined
        :rules="[rules.required]"
        label="Company E-mail"
        required
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
        :rules="[rules.required]"
        :type="showConfirmPassword ? 'text' : 'password'"
        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showConfirmPassword = !showConfirmPassword"
      ></v-text-field>

      <v-btn block color="primary" @click="login"> Sign Up </v-btn>
    </div>

    <div class="py-4">
      <v-checkbox v-model="FORM.persistent">
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
        persistent: true,
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
    login() {
      console.log(this.FORM)
      this.$router.replace('/')
    },
  },
}
</script>
