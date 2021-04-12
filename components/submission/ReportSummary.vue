<template>
  <div class="py-6">
    <div>
      <span class="subtitle-1 font-weight-bold"> Submitted By:</span>
      <span class="grey--text text--darken-2">Afolabi Olajide</span> on
      <span class="grey--text text--darken-2">2020-12-11</span>
    </div>
    <div class="py-4">
      <v-icon color="primary" class="mr-3">mdi-chat</v-icon>
      <strong>8</strong> Comments
    </div>

    <div class="subtitle-1 font-weight-bold py-6">REPORT DETAILS</div>

    <v-simple-table>
      <template #default>
        <tbody>
          <tr>
            <td>ACTION STATE</td>
            <td>New (Open)</td>
          </tr>
          <tr>
            <td>REPORTED TO</td>
            <td>Company-Name</td>
          </tr>
          <tr>
            <td>REPORTED AT</td>
            <td>{{ new Date().toLocaleString() }}</td>
          </tr>
          <tr>
            <td>SCOPE</td>
            <td>api.example.com</td>
          </tr>
          <tr>
            <td>REFERENCES</td>
            <td>TEK-PRG1234567890 CVE ID 12345</td>
          </tr>
          <tr>
            <td>ASSIGNED TO</td>
            <td>Company-Representative</td>
          </tr>
          <tr>
            <td>BUG TYPE</td>
            <td>Allocation of Resources Without Limits or Throttling</td>
          </tr>
          <tr>
            <td>SEVERITY</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>PARTICIPANTS</td>
            <td>Name-of-participating-Hackers (Add participant)</td>
          </tr>
          <tr>
            <td>NOTIFICATIONS</td>
            <td>Enabled</td>
          </tr>
          <tr>
            <td>VISIBILITY</td>
            <td>Private</td>
          </tr>
          <tr>
            <td>REWARD GRID</td>
            <td class="d-flex justify-space-between">
              <div
                v-for="reward in rewards"
                :key="reward.severtity"
                class="text-center mx-2"
              >
                <div class="grey--text darken-3 pb-2">
                  {{ reward.severtity }}
                </div>
                <div>
                  <v-btn rounded color="secondary" class="primary--text"
                    >$ {{ reward.price }}</v-btn
                  >
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
