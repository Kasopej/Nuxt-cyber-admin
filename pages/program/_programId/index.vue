<template>
  <main>
    <section v-if="!submission" class="pb-12">
      <program-item-list :program="program" class="mb-12" />

      <div class="text-center">
        <v-img src="/images/no-data.svg" max-height="420" contain />
        <div
          class="subtitle-1 text-center accent--text font-weight-meduim py-8"
        >
          No Submmision Selected
        </div>
      </div>
    </section>

    <section v-else>
      <v-breadcrumbs
        large
        divider="»"
        :items="breadcrumbsItems"
        class="pa-0 pb-2"
      />
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
          <v-tab-item> <submission-comment-tab /> </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'submission',

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
          exact: true,
          text: 'Submissions',
          to: '..',
        },
      ],
    }
  },

  computed: {
    submission() {
      return this.$store.state.submission.data
    },
  },

  mounted() {
    // Clear Vuex data on page load to avoid error
    this.$store.commit('submission/SAVE_DATA', null)
  },
}
</script>
