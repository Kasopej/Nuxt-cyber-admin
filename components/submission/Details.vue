<template>
  <div>
    <template v-if="$fetchState.pending">
      <v-skeleton-loader v-for="i in 3" :key="i" type="article" />
    </template>
    <template v-else-if="$fetchState.error">
      <partials-empty-data caption="An error occured" />
    </template>
    <template v-else>
      <div class="pt-2">
        <div class="headline text-capitalize d-flex align-center mb-3">
          <v-icon large color="primary"> mdi-domain </v-icon>
          <span class="ml-2">{{ program.title }}</span>
        </div>
        <v-divider></v-divider>
      </div>
      <div v-if="!submission" class="pb-12">
        <partials-empty-data
          :max-height="200"
          class="mt-10"
          caption="No Submmision Selected"
        />
      </div>

      <section v-else>
        <div class="py-3">
          <v-btn
            outlined
            small
            color="primary"
            class="white--text back-link"
            @click="clearSelectedSubmission"
          >
            <v-icon dark> mdi-arrow-left </v-icon>
            Back
          </v-btn>
        </div>

        <v-tabs v-model="tab">
          <v-tab>Report Summary</v-tab>
          <v-tab>Bug Description</v-tab>
          <v-tab>Comments</v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <submission-report-summary-tab
                :submission="submission"
                :rewards="program.rewardGrid"
              />
            </v-tab-item>
            <v-tab-item>
              <submission-description-tab
                :submission="submission"
                :submission-attachments="submissionAttachments"
              />
            </v-tab-item>
            <v-tab-item>
              <submission-comment-tab :submission="submission" />
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </section>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { needsProgramDataOnLoad } from '~/plugins/mixins'

const { mapMutations: mapSubmissionMutations } =
  createNamespacedHelpers('submission')

export default {
  mixins: [needsProgramDataOnLoad],
  layout: 'submissionLayout',
  middleware: 'auth',
  props: {
    submission: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      tab: 0,
      breadcrumbsItems: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/',
        },
        {
          disabled: true,
          text: 'program Details',
        },
      ],
      submissionAttachments: [],
    }
  },

  watch: {
    submission() {
      this.getSubmissionAttachments()
      this.$fetch()
    },
  },

  created() {
    //  clear stored submission. Fresh submission will be stored via mutataion trigger in selection component
    this.SAVE_SUBMISSION(null)
  },

  methods: {
    ...mapSubmissionMutations(['SUBMISSION_SELECTED', 'SAVE_SUBMISSION']),
    clearSelectedSubmission() {
      this.SUBMISSION_SELECTED(false)
      this.SAVE_SUBMISSION(null)
    },
    async getSubmissionAttachments() {
      const attachmentURL = `/get-submission-attachments/${this.submission._id}`
      await this.getHTTPClient()
        .$get(attachmentURL)
        .then((res) => {
          this.submissionAttachments = res.data
        })
        .catch((error) => {
          this.$store.dispatch('notification/failureSnackbar', error)
        })
    },
  },
}
</script>

<style scoped>
.back-link {
  display: block;
}

@media (min-width: 768px) {
  .back-link {
    display: none;
  }
}
</style>
