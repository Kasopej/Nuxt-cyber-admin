<template>
  <aside>
    <nav class="d-flex flex-column fill-height">
      <div
        class="grey pa-2 py-4 mx-5 mx-sm-5 mx-md-4 mb-3 rounded-lg"
        :class="$vuetify.theme.dark ? 'darken-5' : 'lighten-5'"
      >
        <v-text-field
          v-model.trim="SEARCH.title"
          dense
          outlined
          label=" Search by title or reference"
          no-details
          @blur="filterSubmission"
          @change="filterSubmission"
        />
        <div>
          <v-select
            v-model="SEARCH.actionstate"
            dense
            outlined
            label="Filter"
            :items="['All', 'New', 'Pending', 'Under Review', 'Accepted']"
            @change="filterSubmission"
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
          <div v-if="submissions.length">
            <div
              v-for="submission in submissions"
              :key="submission._id"
              @click="openSubmission(submission)"
            >
              <!-- <v-hover v-slot="{ hover }">
                <article
                  class="pa-4 d-flex align-center"
                  :class="
                    hover ||
                    ($store.state.submission.data &&
                      submission._id == $store.state.submission.data._id)
                      ? 'secondary'
                      : ''
                  "
                >
                  <div class="flex-grow-1">
                    <span
                      class="pa-2 grey caption lighten-4 grey--text rounded-lg text-no-wrap text--darken-2"
                    >
                      #{{ submission.reference }}
                    </span>
                    <div
                      class="subtitle-1 text-no-wrap text-capitalize overflow-x-hidden pt-2"
                    >
                      {{ submission.title }}
                    </div>
                  </div>
                  <div><v-icon color="primary"> mdi-arrow-right </v-icon></div>
                </article>
              </v-hover> -->
              <SubmissionItemCard :submission="submission" />
              <v-divider :[oppThemeBinding]="true" />
            </div>
            <partials-pagination
              v-if="submissions.length > 1"
              v-model="pagination.page"
              :length="pagination.length"
              :page-limit="10"
              @input="$fetch"
            ></partials-pagination>
          </div>

          <section
            v-else
            class="subtitle-1 text-center accent--text font-weight-bold py-12"
          >
            No Submissions Found
          </section>
        </template>
      </section>
    </nav>
  </aside>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { paginationMixin } from '~/plugins/mixins'
const { mapMutations } = createNamespacedHelpers('submission')

export default {
  mixins: [paginationMixin],
  data() {
    return {
      SEARCH: {
        actionstate: 'All',
      },
      submissions: [],
      filteredSubmissions: null,
      filtersSet: false,
    }
  },

  async fetch() {
    const URL = `/get-program-submissions/${
      this.$route.params.programId
    }?page=${1}&limit=10${this.filterURLParams}`
    // Make get request to the API
    await this.getHTTPClient()
      .$get(URL, this.FORM)
      .then((res) => {
        this.submissions = res.data.docs
        this.pagination.length = res.data.totalPages
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

  computed: {
    filterURLParams() {
      if (!this.filtersSet) return ''
      return `&status=${this.SEARCH.actionstate ?? ''}&title=${
        this.SEARCH.title ?? ''
      }`
    },
    oppThemeBinding() {
      return !this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },

  watch: {
    SEARCH() {
      this.filtersSet = true
      this.$fetch()
    },
  },

  methods: {
    ...mapMutations(['SAVE_SUBMISSION', 'SUBMISSION_SELECTED']),
    openSubmission(submission) {
      // Save data to Vuex store
      this.SAVE_SUBMISSION(submission)
      this.SUBMISSION_SELECTED(true)
    },

    filterSubmission() {
      this.filteredSubmissions = this.submissions.filter((el) => {
        let res = el
        const title = this.SEARCH.title
        const actionstate = this.SEARCH.actionstate

        if (title) {
          res =
            el.title.toLowerCase().includes(title.toLowerCase()) ||
            el.reference.toLowerCase().includes(title.toLowerCase())
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
