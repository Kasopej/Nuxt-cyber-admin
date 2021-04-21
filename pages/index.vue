<template>
  <div>
    <partials-header title="Programs" />

    <v-main>
      <v-container>
        <main class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <div class="d-flex justify-space-between pb-4">
            <v-breadcrumbs
              large
              divider="»"
              :items="[{ text: 'Dashboard', disabled: false, to: '/' }]"
              class="pa-0"
            />
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
                class="d-flex align-center mt-6 overflow-x-hidden"
              >
                <v-img
                  src="/images/dummy.jpg"
                  width="250"
                  height="200"
                  :max-width="$vuetify.breakpoint.mobile ? '100px' : '250px'"
                  cover
                />

                <section
                  style="min-height: 200px"
                  class="flex-grow-1 fill-height w-full d-flex flex-column justify-space-between pa-2 pa-md-4"
                >
                  <div class="d-sm-flex justify-space-between">
                    <header
                      class="headline font-weight-medium accent--text"
                      v-text="program.title"
                    />

                    <aside
                      class="grey--text text--darken-2 font-weight-bold py-2 px-sm-4 py-sm-0"
                      v-text="program.status"
                    />
                  </div>

                  <div
                    class="d-none d-sm-inline grey--text text--darken-2 text-no-wrap py-3"
                  >
                    <v-icon small class="mr-2">mdi-gift</v-icon> $150 - $2,500
                  </div>

                  <div class="pb-1 text-no-wrap">
                    <v-icon small class="mr-2">mdi-counter</v-icon
                    ><strong v-text="program.submission || 0" />
                    Submissions
                  </div>
                  <div class="font-italic text-no-wrap">
                    <small v-text="programTypes[program.type]" />
                  </div>
                </section>
              </v-card>
            </template>

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
