<template>
  <div>
    <partials-header title="Programs" />

    <v-main>
      <v-container>
        <main class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <div class="d-flex justify-space-between pb-4">
            <div class="headline">Dashboard</div>
            <v-btn color="primary" to="/program/add/">Add Program</v-btn>
          </div>

          <section v-if="$fetchState.pending">
            <v-skeleton-loader
              v-for="h in 3"
              :key="h"
              type="article, actions"
              class="py-2"
            ></v-skeleton-loader>
          </section>

          <section v-else-if="$fetchState.error" class="py-8">
            <v-img src="/images/server-down.svg" max-height="420" contain />
            <div
              class="subtitle-1 text-center accent--text font-weight-bold py-8"
            >
              Something Occured
            </div>
          </section>

          <template v-else>
            <template v-if="programs.length">
              <v-card
                v-for="program in programs"
                :key="program.id"
                class="d-flex mt-6"
              >
                <v-img
                  src="/images/dummy.jpg"
                  width="250"
                  max-width="250"
                  height="200"
                  cover
                />
                <div
                  class="flex-grow-1 d-flex justify-space-between w-full pa-4"
                >
                  <div
                    class="flex-grow-1 d-flex flex-column justify-space-between"
                  >
                    <div>
                      <header
                        class="headline font-weight-bold"
                        v-text="program.title"
                      />
                      <div class="grey--text text--darken-2 py-3">
                        <v-icon small class="mr-2">mdi-gift</v-icon> $150 -
                        $2,500 Per vulnerability
                      </div>
                    </div>

                    <div class="grey--text text--darken-3">
                      <div class="pb-1">
                        <v-icon small class="mr-2">mdi-counter</v-icon
                        ><strong>3</strong> Submissions
                      </div>
                      <small><em v-text="programTypes[program.type]" /> </small>
                    </div>
                  </div>

                  <div
                    class="d-flex flex-column justify-space-between text-right subtitle-1"
                  >
                    <div
                      class="grey--text text--darken-2 font-weight-bold px-4"
                      v-text="program.status"
                    />
                    <v-btn
                      text
                      color="accent"
                      class="text-capitalize subtitle-1 font-weight-bold"
                      >View Summary</v-btn
                    >
                  </div>
                </div>
              </v-card></template
            >
            <template v-else>
              <section class="py-12">
                <div class="text-center">
                  <v-img src="/images/no-data.svg" max-height="420" contain />
                  <div
                    class="subtitle-1 text-center accent--text font-weight-bold py-8"
                  >
                    No programs Found
                  </div>
                </div>
              </section>
            </template>
          </template>
        </main>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',

  data() {
    return {
      programs: [],

      programTypes: {
        compliance: 'Premuim Pen Test',
        VDP: 'Vulnerability Disclosure Program',
        'Bug Bounty': 'Bug Bounty Program',
      },
    }
  },

  async fetch() {
    const URL = `/load-programs`
    // Make upload request to the API
    await this.$axios
      .$get(URL, this.FORM)
      .then((res) => {
        this.programs = res.data
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Something occured. Please try again',
        })
      })
  },

  methods: {
    getProgramName(programType) {
      let result
      switch (programType) {
        case 'Compliance"':
          result = 'Vulnerability Disclosure Program'
          break

        case 'Bug Bounty':
          result = 'Vulnerability Disclosure Program'
          break

        case 'vdp':
          result = 'Vulnerability Disclosure Program'
          break

        default:
          result = 'Unknown'
          break
      }

      return result
    },
  },
}
</script>
