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
            <v-icon color="accent" left>mdi-file-document</v-icon>
            <div
              class="cursor"
              @click="() => $router.push(prependAdminRoute + '/submissions')"
            >
              <h3 class="w-max">Submissions Made</h3>
              <span class="max-content mx-auto text-h3">{{
                submissionsNumber
              }}</span>
            </div>
          </v-col>
          <v-col cols="6" md="4" class="d-flex align-start">
            <v-icon color="accent" left>mdi-account-group</v-icon>
            <div class="cursor">
              <h3 class="w-max">My Hunters</h3>
              <span class="fit-content mx-auto text-h3">{{
                submissionsNumber
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
export default {
  data() {
    return {
      totalPrivateProgramsNumber: 0,
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
  methods: {
    async getNumberOfPrivatePrograms() {
      const URL = `get-private-submission`
      await this.$axios.$get(URL).then((res) => {
        this.totalPrivateProgramsNumber = res.data
      })
    },
    async getNumberOfSubmissions() {
      const URL = `get-all-submissions/all?page=1&limit=1000`
      await this.$axios.$get(URL).then(({ data: { docs = [] } }) => {
        this.submissionsNumber = docs.length
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
