<template>
  <div class="py-6">
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col class="font-weight-medium" cols="3">ACTION STATE</v-col>
          <v-col>New (Open)</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">REPORTED By</v-col>
          <v-col>
            <nuxt-link to="/hacker/001" class="primary--text"
              >Afolabi Olajide</nuxt-link
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">REPORTED TO</v-col>
          <v-col>Company-Name</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">REPORTED AT</v-col>
          <v-col>{{ new Date().toLocaleString() }}</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">SCOPE</v-col>
          <v-col>api.example.com</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">REFERENCES</v-col>
          <v-col>TEK-PRG1234567890 CVE ID 12345</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">ASSIGNED TO</v-col>
          <v-col>Company-Representative</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">BUG TYPE</v-col>
          <v-col>Allocation of Resources Without Limits or Throttling</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">SEVERITY</v-col>
          <v-col>Medium</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">PARTICIPANTS</v-col>
          <v-col>Name-of-participating-Hackers (Add participant)</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">NOTIFICATIONS</v-col>
          <v-col>Enabled</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">VISIBILITY</v-col>
          <v-col>Private</v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-medium" cols="3">REWARD GRID</v-col>
          <v-col>
            <div class="d-flex justify-space-around py-1">
              <div
                v-for="reward in rewards"
                :key="reward.severtity"
                class="text-center mx-2"
              >
                <div class="grey--text darken-3 pb-2">
                  {{ reward.severtity }}
                </div>
                <div>
                  <v-btn color="secondary" class="primary--text"
                    >$ {{ reward.price }}</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <submission-severity-settings />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rewards: [
        { severtity: 'LOW', price: '50' },
        { severtity: 'MEDIUM', price: '500' },
        { severtity: 'HIGH', price: '1000' },
        { severtity: 'CRITICAL', price: '2500' },
      ],
    }
  },
}
</script>
