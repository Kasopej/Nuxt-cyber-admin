<template>
  <main class="px-3 py-6">
    <section v-if="$fetchState.pending">
      <v-skeleton-loader v-for="i in 3" :key="i" type="article" />
    </section>

    <section v-else-if="$fetchState.error">
      <partials-empty-data caption="An error occured" />
    </section>

    <section v-else-if="!comments.length">
      <partials-empty-data caption="No comments for this submission" />
    </section>

    <section v-else class="comments-section">
      <v-timeline dense align-top>
        <v-timeline-item v-for="comment in comments" :key="comment._id">
          <template #icon>
            <v-avatar>
              <img
                :src="
                  comment.hunterId
                    ? comment.hunterId.profile?.[0]?.image ??
                      '/images/dummy.jpg'
                    : comment.accountId.company?.[0]?.image ??
                      '/images/dummy.jpg'
                "
              />
            </v-avatar>
          </template>
          <v-card>
            <v-card-title
              class="d-flex px-3 py-2 text-body-2 secondary lighten-8"
            >
              <v-tooltip top nudge-bottom="20" class="px-1 py-1">
                <template #activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">{{
                    comment.hunterId
                      ? comment.hunterId.profile?.[0].username
                      : comment.accountId.company?.[0].name
                  }}</span>
                </template>
                <span class="text-xs">100 points</span>
              </v-tooltip>
              <v-chip dense class="ml-1 px-2 py-1" small>{{
                comment.accountType
              }}</v-chip>
              <div class="ml-auto fit-content flex">
                Commented on
                {{ new Date(comment.createdAt).toDateString() }}
                <v-icon color="primary" class="-mt-0.5 ml-1">{{
                  visibilityIcon(comment)
                }}</v-icon>
                <span
                  class="ml-1 text-accent text-caption font-weight-medium"
                  v-text="comment.status"
                ></span>
              </div>
            </v-card-title>
            <v-card-text class="px-3 py-3">
              <article v-html="convertCommentHTML(comment.comment)"></article>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </section>

    <section class="actions-section">
      <div class="flex justify-end">
        <v-btn
          v-if="submission.actionstate !== 'closed'"
          color="primary"
          @click="localInitiatePaymentAction"
          >Close Report</v-btn
        >
        <template v-else>
          <v-btn color="primary">Reopen</v-btn>
          <v-btn color="primary ml-2" @click="makePayment">Pay Reward</v-btn>
        </template>
      </div>

      <div class="text-center mt-8">
        <v-btn
          v-if="pagination.page < pagination.length"
          color="primary"
          elevation="2"
          :loading="loadingMore"
          small
          rounded
          @click="loadMoreComments"
        >
          Add More
        </v-btn>
      </div>

      <p v-if="loadingMore" class="text-end mt-4">Adding to list...</p>

      <v-form ref="commentForm" @submit.prevent="postComment">
        <div class="flex flex-wrap mb-2 items-center">
          <v-autocomplete
            v-model="FORM.action"
            dense
            outlined
            label="Action"
            :items="actions"
          >
          </v-autocomplete>
          <!-- <v-switch
          v-model="FORM.private"
          :label="FORM.private ? 'Open Report?' : 'Close Report?'"
          class="ml-2 mt-0 self-start"
        ></v-switch> -->
        </div>
        <div
          v-show="showCommentSection"
          class="text-accent headline font-weight-bold py-4"
        >
          Post A Response
        </div>

        <v-card v-show="showCommentSection" class="pa-4" elevation="3">
          <div class="flex">
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
              class="mx-2 md:mx-3 inline-block"
              @click="commentPreview = convertCommentHTML(FORM.comment)"
              >Preview <v-icon small class="ml-2">mdi-eye</v-icon></v-btn
            >
            <v-autocomplete
              v-model="selectedPresetComment"
              class="ml-auto fit-content"
              dense
              outlined
              label="Comment Templates"
              :items="presetComments"
              item-value="content"
              item-text="title"
              @change="FORM.comment = selectedPresetComment"
            >
            </v-autocomplete>
          </div>
          <article class="flex">
            <v-avatar size="50" class="col-1 py-0 px-0">
              <img src="/images/dummy.jpg" alt="user profile image" />
            </v-avatar>
            <div class="col-11 py-0 px-1">
              <div
                v-if="commentPreview"
                class="elevation-2 relative comment-preview rounded px-2 py-4"
                v-html="commentPreview"
              />
              <v-textarea
                v-else
                v-model="FORM.comment"
                else
                outlined
                hide-details
              />

              <div class="pb-4">
                <small class="grey--text darken-2"
                  >Styling with MarkDown is supported</small
                >
              </div>
            </div>
          </article>
        </v-card>
        <partials-form-submit-btn
          :disabled="!formChanged"
          :progress="formSubmitting"
          text="Submit"
        />
      </v-form>
    </section>
  </main>
</template>

<script>
import showdown from 'showdown'
import { createNamespacedHelpers } from 'vuex'
import presetComments from '~/assets/presets/comments.json'
import { paginationMixin } from '~/plugins/mixins'

const { mapState } = createNamespacedHelpers('submission')

export default {
  mixins: [paginationMixin],
  data() {
    return {
      FORM: {
        comment: '',
      },
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
      formSubmitting: false,
      formChanged: false,
      pagination: { page: 1, length: 0 },
      loadingMore: false,
    }
  },

  async fetch() {
    if (this.submission) {
      const URLL = `/get-comments/${this.submission._id}`
      // Make upload request to the API
      await this.getHTTPClient()
        .$get(URLL)
        .then((res) => {
          this.comments = res.data
          this.pagination.length = res.data.totalPages
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
    ...mapState({
      submission: 'data',
    }),
    showCommentSection() {
      return this.FORM.action === 'Post Comment'
    },
  },
  watch: {
    FORM: {
      handler(form) {
        this.formChanged = !this.testObjectEqualityWithJSON(
          form,
          this.emptyForm
        )
      },
      deep: true,
    },
  },

  created() {
    this.emptyForm = Object.freeze(this.cloneObjectWithJSON(this.FORM))
  },

  methods: {
    visibilityIcon(comment) {
      return comment.type === 'Public' ? 'mdi-eye' : 'mdi-eye-off'
    },
    convertCommentHTML(val) {
      const converter = new showdown.Converter()
      return converter.makeHtml(val)
    },
    previewComment() {
      this.commentPreview = this.convertCommentHTML(this.FORM.comment)
    },
    async postComment() {
      if (this.$refs.commentForm.validate() && this.formChanged) {
        this.$nuxt.$loading.start()

        const submissionId = this.submission._id
        const PAYLOAD = { ...this.FORM, submissionId, status: 'Approved' }

        const URLL = `/create-comment/${submissionId}`
        // Make upload request to the API
        await this.getHTTPClient()
          .$post(URLL, PAYLOAD)
          .then(() => {
            this.FORM = { comment: '' }
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
    async loadMoreComments() {
      this.loadingMore = true
      ++this.pagination.page

      const URL = `/get-comments/${this.submission._id}?page=${this.pagination.page}&limit=${this.pageLimit}`

      try {
        const response = await this.$axios.$get(URL)
        this.comments.push(...response.data.docs)
      } catch (e) {
        --this.pagination.page
        this.$store.dispatch('notification/failureSnackbar', e)
      }
      this.loadingMore = false
    },
    cloneObjectWithJSON(obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    testObjectEqualityWithJSON(obj1 = {}, obj2 = {}) {
      return JSON.stringify(obj1) === JSON.stringify(obj2)
    },
    localInitiatePaymentAction() {
      // temporary
      const localSubmissionClone = { ...this.submission }
      localSubmissionClone.actionstate = 'closed'
      this.$store.commit('submission/SAVE_SUBMISSION', localSubmissionClone)
    },
    makePayment() {
      // make sure payment has not been made already, maybe a field?
      this.$store.commit('payment/TOGGLE_PAYMENT_MODAL', true)
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
