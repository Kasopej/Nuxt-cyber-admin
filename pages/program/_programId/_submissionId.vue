<template>
  <main>
    <section v-if="!$route.params.submissionId" class="py-12">
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
      submission: {
        actionstate: 'pending',
        _id: '60805284c4ca9b0022f31380',
        hunterId: '607044ae84a822153464ab67',
        programId: '607a90d36691490022857707',
        title: 'FutureX Na Baba',
        description: 'This is just another Sample Description.',
        reportedto: 'OgbeniHMMD',
        scope: 'Sample-scope-0',
        reference: 'Sample-reference-1',
        cveid: '420',
        bugtype: 'Nothing to report o. LOL',
        notification: true,
        visibility: 'Public',
        reportedat: '2021-04-21T16:27:48.111Z',
        date: '2021-04-21T16:27:48.111Z',
        createdAt: '2021-04-21T16:27:48.113Z',
        updatedAt: '2021-04-21T16:27:48.113Z',
        __v: 0,
      },
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
}
</script>
