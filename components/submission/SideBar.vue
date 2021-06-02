<template>
  <v-navigation-drawer
    :width="$vuetify.breakpoint.mobile ? '100%' : '320px'"
    style="height: 100vh; min-width: 320px"
    permanent
  >
    <nav class="d-flex flex-column fill-height">
      <div class="grey lighten-5 pa-2 py-4">
        <v-text-field
          v-model.trim="SEARCH.title"
          dense
          outlined
          label=" Search by or Title"
          no-details
          @blur="filterSubmission()"
          @change="filterSubmission()"
        />
        <div>
          <v-select
            v-model="SEARCH.actionstate"
            dense
            outlined
            label="Filter"
            :items="['All', 'New', 'Pending', 'Under Review', 'Accepted']"
            @change="filterSubmission()"
          />
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
          <template v-if="submissions.length">
            <div
              v-for="submission in filteredSubmissions"
              :key="submission._id"
              @click="openSubmission(submission)"
            >
              <v-hover v-slot="{ hover }">
                <article
                  class="pa-4"
                  :class="
                    hover ||
                    ($store.state.submission.data &&
                      submission._id == $store.state.submission.data._id)
                      ? 'secondary'
                      : ''
                  "
                >
                  <span
                    class="
                      pa-2
                      grey
                      caption
                      lighten-4
                      grey--text
                      rounded-lg
                      text-no-wrap text--darken-2
                    "
                  >
                    #{{ submission.reference }}
                  </span>
                  <div class="subtitle-2 text-no-wrap overflow-x-hidden pt-2">
                    {{ submission.title }}
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
      SEARCH: {},
      submissions: [],
      filteredSubmissions: null,
    }
  },

  async fetch() {
    const URL = `/get-program-submissions/${this.$route.params.programId}?limit=999`
    // Make upload request to the API
    await this.$axios
      .$get(URL, this.FORM)
      .then((res) => {
        this.submissions = res.data.docs
        this.filteredSubmissions = this.submissions
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
    openSubmission(submission) {
      // Save data to Vuex store
      this.$store.commit('submission/SAVE_DATA', submission)
      // this.$forceUpdate()
    },

    filterSubmission() {
      this.filteredSubmissions = this.submissions.filter((el) => {
        let res = el
        const title = this.SEARCH.title
        const actionstate = this.SEARCH.actionstate

        if (title) {
          res = el.title.toLowerCase().includes(title.toLowerCase())
        }

        // eslint-disable-next-line eqeqeq
        if (res && actionstate && actionstate != 'All') {
          // eslint-disable-next-line eqeqeq
          res = el.actionstate == actionstate.toLowerCase()
        }

        return !!res
      })

      if (!this.filteredSubmissions.length) {
        this.filteredSubmissions = null
      }
    },
  },
}
</script>
