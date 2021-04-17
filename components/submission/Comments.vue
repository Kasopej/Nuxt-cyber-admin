<template>
  <div class="px-2 py-6">
    <div><v-checkbox label="Show only private comments" /></div>
    <div class="text-center py-8">No comments for this submission</div>

    <v-form ref="commentForm">
      <div class="accent--text headline font-weight-bold py-4">
        Post A Respone
      </div>
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="FORM.status"
            dense
            outlined
            label="Action"
            :items="actions"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-switch v-model="FORM.private" label="Make It private?"></v-switch>
        </v-col>
      </v-row>

      <v-card class="pa-4" elevation="3">
        <v-row>
          <v-col>
            <v-btn
              small
              :outlined="!!commentPreview"
              color="accent"
              @click="commentPreview = null"
              >Write
              <v-icon small class="ml-2">mdi-fountain-pen-tip</v-icon></v-btn
            >
            <v-btn
              small
              :outlined="!commentPreview"
              color="accent"
              class="my-2 mx-md-3"
              @click="previewComment()"
              >Preview <v-icon small class="ml-2">mdi-eye</v-icon></v-btn
            >
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="selectedPresetComment"
              dense
              outlined
              label="Comment Templates"
              :items="presetComments"
              item-value="content"
              item-text="title"
              @change="FORM.comment = selectedPresetComment"
            >
            </v-autocomplete>
          </v-col>
        </v-row>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          v-if="commentPreview"
          class="elevation-2 rounded px-2 py-4"
          v-html="commentPreview"
        />
        <v-textarea v-else v-model="FORM.comment" else outlined hide-details />

        <div class="pb-4">
          <small class="grey--text darken-2"
            >Styling with MarkDown is supported</small
          >
        </div>

        <v-btn color="primary" @click="postComment()">Post Response</v-btn>
      </v-card></v-form
    >
  </div>
</template>

<script>
import showdown from 'showdown'

export default {
  data() {
    return {
      FORM: {},

      actions: [
        'Post Comment',
        'Need More Information',
        'Accepted',
        'Resolved',
        'Under Review',
        'Duplicate',
        'Thanks',
        'Asked For Fix Verification',
        'New',
      ],

      presetComments: [
        {
          title: 'Accepted > Resolved',
          content:
            'Hello,\nThanks to your findings, we were able to fix this vulnerability.\nYour report is now closed as Resolved.\n\nRegards',
        },
        {
          title: 'Under Review > Duplicate',
          content:
            'Hello,\nThanks for your submission and for the time spent on that report.\nWe appreciate your help but another hunter already submitted the same bug.\nYour report is closed with status ‘Duplicate’, and for that you will receive 1 ranking point.\nWe hope that you will keep on participating in our program and we wish you better luck in your next findings.\n\nRegards.',
        },
        {
          title: 'Under Review > Thanks',
          content:
            'Hello, \nThanks for your first submission on our program.\nUnfortunately, we cannot consider your report as valid, based on our program’s rules.\nYou report is closed with status ‘Thanks’, so that you don’t loose ranking points.\nWe hope that you will keep on participating in our program and we wish you better luck in your next findings.\n\nRegards.',
        },
        {
          title: 'Asked For Fix Verify > Resolved',
          content:
            'Hello,\nThanks for your verification.\nThis report is now closed as Resolved.\n\nRegards.',
        },
        {
          title: 'Under Review > Accepted',
          content:
            'Hello,\nWe were able to reproduce the PoC and we decided to accept your report.\nYour report is therefore eligible for a reward – stay tuned.\n\nCongrats/Cheers.',
        },
        {
          title: 'New > Under Review',
          content:
            'Hello,\nThanks for your submission\nYour report will be reviewed by our team and updated in a timely manner.\n\nRegards.',
        },
      ],
      selectedPresetComment: null,
      commentPreview: null,
    }
  },

  methods: {
    previewComment() {
      const converter = new showdown.Converter()
      this.commentPreview = converter.makeHtml(this.FORM.comment)
    },

    async postComment() {
      const submissionId = this.$route.hash.replace('#!/', '')

      if (this.$refs.commentForm.validate() && submissionId) {
        const URLL = `/create-comment/${submissionId}`
        // Make upload request to the API
        await this.$axios
          .$post(URLL, this.FORM)
          .then(() => {
            this.FORM = {}

            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Invitation Sent Successfully',
            })
          })
          .catch((error) => {
            this.$store.commit('notification/SHOW', {
              color: 'accent',
              icon: 'mdi-alert-outline',
              text: error.response
                ? error.response.data.message
                : "Sorry, that didn't work. Please try again",
            })
          })
          .finally(() => {
            // Close the loader
          })
      }
    },
  },
}
</script>
