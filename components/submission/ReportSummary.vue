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
                  <v-btn rounded color="secondary" class="primary--text"
                    >$ {{ reward.price }}</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" class="px-4">
        <v-card class="px-4 py-8">
          <div class="d-flex justify-center">
            <div class="accent text-center white--text rounded px-8 py-3 mx-1">
              <div>CVSS Score</div>
              <div class="font-weight-bold">2.2</div>
            </div>
            <div class="accent text-center white--text rounded px-8 py-3 mx-1">
              <div>Severity</div>
              <div class="font-weight-bold">MEDIUM</div>
            </div>
          </div>

          <header class="grey--text text--darken-1 text-center py-4">
            Please enter the relevant vector of the vulnerability
          </header>

          <div class="py-2">
            <div class="subtitle-1 font-weight-medium">Attack Vector</div>
            <v-btn-toggle
              v-model="FORM.atackVector"
              color="primary"
              rounded
              dense
            >
              <v-btn class="text-capitalize" value="none"> None </v-btn>
              <v-btn class="text-capitalize" value="required"> Required </v-btn>
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
          <div class="py-2">
            <v-autocomplete
              v-model="FORM.tags"
              :items="['tag 1', 'tag 2', 'tag 3']"
              small-chips
              label="Tags"
              multiple
              outlined
              dense
              chips
            ></v-autocomplete>
          </div>
          <v-row>
            <v-col>
              <v-btn color="primary">Save Changes</v-btn>
            </v-col>
            <v-col>
              <v-btn text color="accent">Reset</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
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
