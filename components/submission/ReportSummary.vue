<template>
  <div class="py-6">
    <div>
      <span class="subtitle-1 font-weight-bold"> Submitted By:</span>
      <nuxt-link to="/hacker/001" class="grey--text text--darken-2"
        >Afolabi Olajide</nuxt-link
      >
      on
      <span class="grey--text text--darken-2">2020-12-11</span>
    </div>
    <div class="py-4">
      <v-icon color="primary" class="mr-3">mdi-chat</v-icon>
      <strong>8</strong> Comments
    </div>

    <div class="subtitle-1 font-weight-bold py-6">REPORT DETAILS</div>

    <v-row>
      <v-col cols="12" md="8">
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
                <td>
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
                        <v-btn rounded color="secondary" class="primary--text"
                          >$ {{ reward.price }}</v-btn
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>

      <v-col cols="12" md="4" class="px-4">
        <v-card class="px-4 py-8">
          <div class="d-flex justify-center">
            <div class="accent text-center white--text rounded px-8 py-4 mx-1">
              <div>CVSS Score</div>
              <div class="font-weight-bold">2.2</div>
            </div>
            <div class="accent text-center white--text rounded px-8 py-4 mx-1">
              <div>Severity</div>
              <div class="font-weight-bold">MEDIUM</div>
            </div>
          </div>

          <div class="subtitle-1 text-center text-text-uppercase py-4">
            { Vector String }
          </div>

          <header>
            <div class="headline primary--text font-weight-bold pb-2">
              Severity
            </div>
            <div class="grey--text text--darken-1 pb-4">
              Please enter the relevant vector of the vulnerability
            </div>
          </header>

          <div class="py-2">
            <div class="subtitle-1 font-weight-medium">Attack Vector</div>
            <v-btn-toggle
              v-model="FORM.atackVector"
              color="primary"
              rounded
              dense
            >
              <v-btn class="text-capitalize" value="network"> Network </v-btn>
              <v-btn class="text-capitalize" value="adjacent"> Adjacent </v-btn>
              <v-btn class="text-capitalize" value="local"> Local </v-btn>
              <v-btn class="text-capitalize" value="physical"> Physical </v-btn>
            </v-btn-toggle>
          </div>
          <div class="d-flex py-2">
            <div class="pr-6">
              <div class="subtitle-1 font-weight-medium">Attack Complexity</div>
              <v-btn-toggle
                v-model="FORM.atackComplexity"
                color="primary"
                rounded
                dense
              >
                <v-btn class="text-capitalize" value="high"> High </v-btn>
                <v-btn class="text-capitalize" value="low"> Low </v-btn>
              </v-btn-toggle>
            </div>
            <div>
              <div class="subtitle-1 font-weight-medium">
                Previledge Required
              </div>
              <v-btn-toggle
                v-model="FORM.previledgeRequired"
                color="primary"
                rounded
                dense
              >
                <v-btn class="text-capitalize" value="none"> None </v-btn>
                <v-btn class="text-capitalize" value="high"> High </v-btn>
                <v-btn class="text-capitalize" value="low"> Low </v-btn>
              </v-btn-toggle>
            </div>
          </div>
          <div class="d-flex py-2">
            <div class="pr-4">
              <div class="subtitle-1 font-weight-medium">User Interaction</div>
              <v-btn-toggle
                v-model="FORM.userInteraction"
                color="primary"
                rounded
                dense
              >
                <v-btn class="text-capitalize" value="network"> Network </v-btn>
                <v-btn class="text-capitalize" value="adjacent">
                  Adjacent
                </v-btn>
              </v-btn-toggle>
            </div>
            <div>
              <div class="subtitle-1 font-weight-medium">Scope</div>
              <v-btn-toggle v-model="FORM.scope" color="primary" rounded dense>
                <v-btn class="text-capitalize" value="unchanged">
                  Unchanged
                </v-btn>
                <v-btn class="text-capitalize" value="changed"> Changed </v-btn>
              </v-btn-toggle>
            </div>
          </div>
          <div class="d-flex py-2">
            <div class="pr-4">
              <div class="subtitle-1 font-weight-medium">Confidentiality</div>
              <v-btn-toggle
                v-model="FORM.confidentiality"
                color="primary"
                rounded
                dense
              >
                <v-btn class="text-capitalize" value="none"> None </v-btn>
                <v-btn class="text-capitalize" value="high"> High </v-btn>
                <v-btn class="text-capitalize" value="low"> Low </v-btn>
              </v-btn-toggle>
            </div>
            <div>
              <div class="subtitle-1 font-weight-medium">Integrity</div>
              <v-btn-toggle
                v-model="FORM.integrity"
                color="primary"
                rounded
                dense
              >
                <v-btn class="text-capitalize" value="none"> None </v-btn>
                <v-btn class="text-capitalize" value="high"> High </v-btn>
                <v-btn class="text-capitalize" value="low"> Low </v-btn>
              </v-btn-toggle>
            </div>
          </div>
          <div class="py-2">
            <div class="subtitle-1 font-weight-medium">Availability</div>
            <v-btn-toggle
              v-model="FORM.availability"
              color="primary"
              rounded
              dense
            >
              <v-btn class="text-capitalize" value="none"> None </v-btn>
              <v-btn class="text-capitalize" value="high"> High </v-btn>
              <v-btn class="text-capitalize" value="low"> Low </v-btn>
            </v-btn-toggle>
          </div>
          <div class="py-4">
            <div class="subtitle-1 font-weight-medium">Quality Rating</div>
            <v-rating
              v-model="FORM.qualityRating"
              color="accent"
              half-increments
              hover
              length="5"
              value="1.5"
            ></v-rating>
          </div>
          <div class="pt-4">
            <v-btn block color="primary">Save Changes</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="py-8">
      <v-btn color="primary">Edit</v-btn>
      <v-btn text color="accent"> + Add Tags</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FORM: {
        atackVector: null,
        atackComplexity: null,
      },

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
