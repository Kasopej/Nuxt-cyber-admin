<template>
  <div>
    <partials-header title="Programs" />

    <v-main>
      <v-container>
        <main class="white mt-n16 rounded-lg pa-2 pa-md-8 mx-0 mx-sm-1">
          <div class="d-flex justify-space-between pb-4">
            <v-breadcrumbs
              large
              divider="»"
              :items="[{ text: 'Dashboard', disabled: false, to: '/' }]"
              class="pa-0"
            />
            <v-btn color="primary" to="/program/new">Add Program</v-btn>
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
              <program-item-list
                v-for="program in programs"
                :key="program.id"
                :program="program"
              />
            </template>

            <partials-empty-data v-else caption="No Submmision Selected" />
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
}
</script>
