<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <section class="py-6">
    <v-expansion-panels mandatory focusable hover>
      <v-card class="w-full">
        <v-card-title primary-title> Bug Description </v-card-title>
        <v-card-text>
          <v-expansion-panel class="elevation-2">
            <v-expansion-panel-header class="text-body-1 mb-2 uppercase">
              Details
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="content grey--text longform-content font-medium"
              :class="{
                'text--darken-3': !$vuetify.theme.dark,
                'text--lighten-3': $vuetify.theme.dark,
              }"
            >
              <p class="text-sm px-2" v-html="description"></p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--  -->
          <v-expansion-panel class="elevation-2">
            <v-expansion-panel-header class="text-body-1 mb-2 uppercase">
              Attachments
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content grey--text text-caption">
              <template v-if="submissionAttachments.length">
                <span
                  v-for="(attachment, index) in submissionAttachments"
                  :key="`attach-${index}`"
                  class="flex mb-1.5"
                >
                  <a class="mr-1" :href="attachment" target="_blank">
                    <v-icon color="primary">mdi-download</v-icon>
                    <span class="underline">Attachment {{ index + 1 }}</span>
                  </a>
                </span>
              </template>
              <p v-else>No Attachments</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>
      </v-card>
    </v-expansion-panels>
    <!-- <div class="px-3 py-6" v-html="description" />
    <hr /> -->
  </section>
</template>

<script>
import showdown from 'showdown'

export default {
  props: {
    submission: { type: Object, default: () => {} },
    submissionAttachments: {
      required: false,
      type: Array,
      default: () => [],
    },
  },

  computed: {
    description() {
      const converter = new showdown.Converter()
      return converter.makeHtml(this.submission.description)
    },
  },
}
</script>
