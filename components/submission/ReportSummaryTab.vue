<template>
  <div class="py-6">
    <v-row>
      <v-col cols="12" md="7">
        <v-card>
          <v-card-title class="mb-3" primary-title>
            <v-row>
              <v-col
                class="pl-2 py-1 py-sm-2 py-md-3 font-weight-medium"
                cols="12"
              >
                REPORT SUMMARY
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row
              v-for="(
                summaryFieldDescriptor, key
              ) in SubmissionSummaryFieldsObj"
              :key="key"
            >
              <v-col
                class="pl-2 -mb-4 font-weight-medium text-uppercase"
                cols="12"
                sm="3"
              >
                {{ convertUnderscoredStringToSpaced(key) }}
              </v-col>
              <v-col class="pl-2 py-1 py-sm-3">
                <nuxt-link
                  v-if="summaryFieldDescriptor.type == 'link'"
                  :to="prependAdminRoute + summaryFieldDescriptor.href"
                  >{{ displayField(summaryFieldDescriptor) }}</nuxt-link
                >
                <span v-else-if="summaryFieldDescriptor.name === 'visibility'">
                  {{ displayField(summaryFieldDescriptor) }}
                  <v-icon color="primary" class="-mt-0.5">{{
                    visibilityIcon
                  }}</v-icon>
                </span>
                <span v-else>{{ displayField(summaryFieldDescriptor) }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pl-2 -mb-4 font-weight-medium" cols="12" sm="3">
                REWARD GRID
              </v-col>
              <v-col class="pl-2 py-1 py-sm-2 py-md-3">
                <div class="d-flex justify-space-around">
                  <div
                    v-for="(reward, severity) in rewards"
                    :key="severity"
                    class="text-center mx-1 mx-sm-2"
                  >
                    <div class="grey--text darken-3">
                      {{ severity.toUpperCase() }}
                    </div>
                    <div>
                      <v-btn
                        :color="
                          submission.severity == severity.toUpperCase()
                            ? 'accent'
                            : 'secondary'
                        "
                        :class="
                          submission.severity == severity.toUpperCase()
                            ? 'white--text'
                            : 'primary--text'
                        "
                      >
                        ${{ reward }}
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">Close Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" lg="5">
        <submission-severity-settings
          :severity="submission.severity"
          :cve-score="submission.cveScore"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import showdown from 'showdown'
import { getCompoundField } from '~/plugins/utils'

const SubmissionSummaryFieldsObj = {
  action_state: { name: 'actionstate' },
  scope: { name: 'scope' },
  reported_by: { name: 'hunterId.profile.username', href: '' },
  reported_to: { name: 'reportedto', type: 'link', href: '' },
  reported_at: { name: 'reportedat', type: 'date' },
  reference: { name: 'reference' },
  assigned_to: { name: 'assignedTo', fallback: 'No Assignee' },
  bugtype: { name: 'bugtype' },
  participants: {
    name: 'participants',
    fallback: 'Name-of-participating-Hackers',
  },
  visibility: { name: 'visibility' },
}

export default {
  mixins: [{ methods: { getCompoundField } }],
  props: {
    submission: { type: Object, default: () => {} },
    rewards: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      SubmissionSummaryFieldsObj,
    }
  },
  computed: {
    visibilityIcon() {
      return this.submission.visibility === 'Public' ? 'mdi-eye' : 'mdi-eye-off'
    },
  },
  methods: {
    convertCommentHTML(val) {
      const converter = new showdown.Converter()
      return converter.makeHtml(val)
    },
    convertUnderscoredStringToSpaced(string = '') {
      return string.split('_').join(' ')
    },
    displayField(fieldDescriptor = {}, record = this.submission) {
      if (!this.getCompoundField(record, fieldDescriptor.name))
        return fieldDescriptor.fallback
      if (fieldDescriptor.type === 'date')
        return new Date(
          this.getCompoundField(record, fieldDescriptor.name)
        ).toLocaleString()
      if (fieldDescriptor.type === 'link') {
        if (fieldDescriptor.name === 'reportedto') {
          fieldDescriptor.href = `/program/${record.programId._id}/invite`
        }
        if (fieldDescriptor.name === 'hunterId.profile.username') {
          fieldDescriptor.href = `/user/${this.getCompoundField(
            record,
            fieldDescriptor.name
          )}`
        }
      }
      return this.getCompoundField(record, fieldDescriptor.name)
    },
  },
}
</script>
