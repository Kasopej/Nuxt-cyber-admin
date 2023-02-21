<template>
  <main class="min-full-height mt-20 w-screen p-4">
    <v-skeleton-loader
      v-if="$fetchState.pending"
      type="card"
    ></v-skeleton-loader>
    <div v-else>
      <v-card raised hover class="mb-6 no-cursor">
        <v-card-title primary-title>
          <v-icon color="primary" x-large left>mdi-shield-account</v-icon>
          Programs and Submissions</v-card-title
        >
        <v-card-text class="d-flex">
          <v-col cols="6" md="4" class="d-flex align-start">
            <v-icon color="accent" left>mdi-shield-lock</v-icon>
            <div class="cursor" @click="() => $router.push('/program')">
              <h3 class="w-max">Submissions Made</h3>
              <span class="max-content mx-auto text-h3">{{
                submissionsNumber
              }}</span>
            </div>
          </v-col>
          <v-col cols="6" md="4" class="d-flex align-start">
            <v-icon color="accent" left>mdi-shield-link-variant</v-icon>
            <div class="cursor" @click="() => $router.push('/submissions')">
              <h3 class="w-max">My Hunters</h3>
              <span class="fit-content mx-auto text-h3">{{
                huntersNumber
              }}</span>
            </div>
          </v-col>
        </v-card-text>
      </v-card>
      <v-card raised hover class="mb-6 no-cursor">
        <v-card-title primary-title>
          <v-icon color="primary" x-large left>mdi-currency-usd</v-icon>
          Total Amount Paid</v-card-title
        >
        <v-card-text class="d-flex">
          <v-col cols="4" class="d-flex align-start">
            <div class="ml-8 cursor">
              <h3 class="fit-content text-h3">$1,000</h3>
            </div>
          </v-col>
        </v-card-text>
      </v-card>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      huntersNumber: 0,
      submissionsNumber: 0,
      badgesNumber: null,
      bounty: null,
    }
  },
  async fetch() {
    await Promise.all([
      this.getNumberOfPrivatePrograms(),
      this.getNumberOfSubmissions(),
    ])
  },
  computed: {
    ...mapGetters('auth', { USER: 'getAccount' }),
  },
  methods: {
    async getNumberOfPrivatePrograms() {
      const URL = `get-private-submission`
      await this.getHTTPClient()
        .$get(URL)
        .then((res) => {
          this.submissionsNumber = res.data
        })
    },
    async getNumberOfSubmissions() {
      const URL = `countAllHunters`
      await this.getHTTPClient()
        .$get(URL)
        .then(({ hunters }) => {
          this.huntersNumber = hunters
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
