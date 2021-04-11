<template>
  <main>
    <v-tabs v-model="tab">
      <v-tab>Report Summary</v-tab>
      <v-tab>Bug Description</v-tab>
      <v-tab>Comments</v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <submission-report-summary />
        </v-tab-item>
        <v-tab-item>
          <submission-description />
        </v-tab-item>
        <v-tab-item> <submission-comments /> </v-tab-item
      ></v-tabs-items>
    </v-tabs>
  </main>
</template>

<script>
export default {
  layout: 'submission',
  data() {
    return { tab: 0 }
  },
}
</script>
