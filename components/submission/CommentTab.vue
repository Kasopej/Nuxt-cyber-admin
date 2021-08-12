<template>
  <div class="px-2 py-6">
    <section v-if="$fetchState.pending">
      <v-skeleton-loader v-for="i in 3" :key="i" type="article" />
    </section>

    <section v-else-if="$fetchState.error">
      <partials-empty-data caption="An error occured" />
    </section>

    <section v-else-if="!comments.length">
      <partials-empty-data caption="No comments for this submission" />
    </section>

    <section v-else>
      <div
        v-for="comment in comments"
        :key="comment._id"
        class="comment d-flex"
      >
        <v-avatar color="secondary" size="40" class="avatar mt-1 mr-2">
          <v-img v-if="comment.hunterId" contain src="" alt="Profile" />
          <v-icon v-else color="primary" size="39">
            {{
              comment.accountType === 'company'
                ? 'mdi-factory'
                : 'mdi-account-circle'
            }}
          </v-icon>
        </v-avatar>

        <v-card class="flex-grow-1 pa-3" elevation="0" outlined>
          <header class="d-sm-flex justify-space-between flex-grow-1">
            <div class="comment__info body-2 text-small">
              <a href="http://" target="_blank" rel="noopener noreferrer"
                >---</a
              >
            </div>

            <time class="grey--text body-2 text-small">
              <span>({{ new Date(comment.createdAt).toLocaleString() }})</span>
            </time>
          </header>

          <article
            class="py-4 body-1 text-medium"
            v-html="convertCommentHTML(comment.comment)"
          ></article>

          <footer class="text-right">
            <span
              class="accent--text text-caption font-weight-medium"
              v-text="comment.status"
            ></span>
            <v-icon small class="ml-2" color="accent">{{
              comment.type == 'Public' ? 'mdi-eye' : 'mdi-eye-off'
            }}</v-icon>
          </footer>
        </v-card>
      </div>
    </section>

    <v-form ref="commentForm" class="py-8">
      <div class="accent--text headline font-weight-bold pb-4">
        Post A Respone
      </div>
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="FORM.action"
            dense
            outlined
            label="Action"
            :items="actions"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-switch
            v-model="FORM.private"
            :label="FORM.private ? 'Open Report?' : 'Close Report?'"
          ></v-switch>
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
          class="rounded px-2 py-4"
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
import presetComments from '~/assets/presets/comments.json'

export default {
  data() {
    return {
      FORM: {},
      comments: [],
      presetComments,

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

      selectedPresetComment: null,
      commentPreview: null,
    }
  },

  async fetch() {
    if (this.submission) {
      const URLL = `/get-comments/${this.submission._id}`
      // Make upload request to the API
      await this.$axios
        .$get(URLL, this.FORM)
        .then((res) => {
          this.comments = res.data
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
    }
  },

  computed: {
    submission() {
      return this.$store.state.submission.data
    },
  },

  watch: {
    submission() {
      this.$fetch()
    },
  },

  methods: {
    convertCommentHTML(val) {
      const converter = new showdown.Converter()
      return converter.makeHtml(val)
    },

    previewComment() {
      this.commentPreview = this.convertCommentHTML(this.FORM.comment)
    },

    async postComment() {
      if (this.$refs.commentForm.validate()) {
        this.$nuxt.$loading.start()

        const submissionId = this.submission._id
        const PAYLOAD = { ...this.FORM, submissionId, status: 'Approved' }

        console.log(PAYLOAD)

        const URLL = `/create-comment/${submissionId}`
        // Make upload request to the API
        await this.$axios
          .$post(URLL, PAYLOAD)
          .then(() => {
            this.FORM = {}
            this.commentPreview = null

            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Comment Submitted Successfully',
            })

            this.$fetch()
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
            this.$nuxt.$loading.finish()
          })
      }
    },
  },
}
</script>

<style scoped>
.comment:not(:last-child) {
  position: relative;
  margin-bottom: 10px;
}
.comment:not(:last-child)::before {
  position: absolute;
  top: 26px;
  left: 20px;
  content: '';
  width: 0;
  height: calc(100% + 10px);
  border-left: 2px solid #f9eded;
}
.comment__info a {
  text-decoration: none;
}
.comment__info a:hover {
  text-decoration: underline;
}
time span {
  font-size: 10px;
}
</style>
