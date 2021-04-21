<template>
  <main>
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
          <submission-report-summary-tab />
        </v-tab-item>
        <v-tab-item>
          <submission-description-tab />
        </v-tab-item>
        <v-tab-item> <submission-comment-tab /> </v-tab-item
      ></v-tabs-items>
    </v-tabs>
  </main>
</template>

<script>
export default {
  layout: 'submission',
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
          exact: true,
          text: 'Submissions',
          to: '/submission/',
        },
      ],
    }
  },
}
</script>
