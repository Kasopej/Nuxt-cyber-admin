<template>
  <v-navigation-drawer
    :width="$vuetify.breakpoint.mobile ? '100%' : '320px'"
    style="height: 100vh; min-width: 320px"
    permanent
  >
    <nav class="d-flex flex-column fill-height">
      <div class="grey lighten-5 pa-2 py-4">
        <v-text-field
          dense
          outlined
          label=" Search by or Title"
          no-details
        ></v-text-field>
        <div>
          <v-select
            dense
            outlined
            :items="['All', 'New', 'Under Review', 'Accepted']"
            label="Filter"
          ></v-select>
        </div>
      </div>

      <section class="overflow-y-auto">
        <section v-if="$fetchState.pending">
          <v-skeleton-loader
            v-for="h in 3"
            :key="h"
            type="article"
            class="py-2"
          ></v-skeleton-loader>
        </section>

        <section v-else-if="$fetchState.error" class="py-8">
          <v-img src="/images/server-down.svg" max-height="420" contain />
          <div
            class="subtitle-1 text-center accent--text font-weight-bold py-12"
          >
            Something Occured. Try Again!
          </div>
        </section>

        <template v-else>
          <template v-if="submmissions.length">
            <div
              v-for="submmission in submmissions"
              :key="submmission._id"
              @click="$router.push(`#!/${submmission._id}`)"
            >
              <v-hover v-slot="{ hover }">
                <article class="pa-4" :class="hover ? 'secondary' : ''">
                  <span
                    class="
                      caption
                      text-no-wrap
                      grey
                      lighten-4
                      grey--text
                      rounded-lg
                      pa-2
                    "
                  >
                    #{{ submmission.reference }}
                  </span>
                  <div class="subtitle-2 text-no-wrap overflow-x-hidden pt-2">
                    {{ submmission.title }}
                  </div>
                </article>
              </v-hover>
              <v-divider />
            </div>
          </template>

          <section
            v-else
            class="subtitle-1 text-center accent--text font-weight-bold py-12"
          >
            No Submissions Found
          </section>
        </template>
      </section>
    </nav>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      submmissions: [],
    }
  },

  async fetch() {
    const URL = `/get-program-submissions/${this.$route.params.programId}`
    // Make upload request to the API
    await this.$axios
      .$get(URL, this.FORM)
      .then((res) => {
        this.submmissions = res.data.docs

        console.log(this.submmissions)
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
