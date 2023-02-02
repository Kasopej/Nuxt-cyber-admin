<template>
  <div>
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
            <submission-report-summary-tab :submission="submission" />
          </v-tab-item>
          <v-tab-item>
            <submission-description-tab :submission="submission" />
          </v-tab-item>
          <v-tab-item>
            <submission-comment-tab :submission="submission" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('submission')
export default {
  layout: 'submissionLayout',
  middleware: 'auth',

  data() {
    return {
      tab: 0,

      program: this.$store.state.program.data,

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
    }
  },

  computed: {
    ...mapState({ submission: 'data' }),
  },

  methods: {
    clearSelectedSubmission() {
      this.$store.commit('submission/SUBMISSION_SELECTED', false)
      this.$store.commit('submission/SAVE_SUBMISSION', null)
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
