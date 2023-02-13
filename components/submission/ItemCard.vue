<template>
  <div class="w-full">
    <v-hover>
      <template #default="{ hover }">
        <v-card
          class="submission-card cursor-pointer"
          :class="
            hover ||
            ($store.state.submission.data &&
              submission._id == $store.state.submission.data._id)
              ? `grey ${!$vuetify.theme.dark ? 'lighten-3' : 'darken-5'} `
              : ''
          "
        >
          <v-card-title primary-title class="flex">
            <!-- Should get program thumbnail from submission's program as this component should not know about programs, only submissions -->
            <v-avatar size="35" class="mr-2">
              <img :src="submission.program || '/images/dummy.jpg'" alt="alt" />
            </v-avatar>
            <span
              class="inline-block primary--text !break-words break-normal"
              >{{ submission.title }}</span
            >
          </v-card-title>
          <v-card-text
            class="submission-card-text !py-2 grey--text longform-content font-medium"
            :class="{
              'text--darken-3': !$vuetify.theme.dark,
              'text--lighten-3': $vuetify.theme.dark,
            }"
          >
            <span
              class="pa-2 grey caption lighten-4 grey--text rounded-lg text-no-wrap text--darken-2"
            >
              #{{ submission.reference }}
            </span>
            <div class="flex">
              <span>Status: {{ submission.actionstate }}</span>
              <div class="ml-auto flex severity-indicator-wrapper items-center">
                <v-progress-linear
                  class="mr-1"
                  :color="submissionSeverityDisplayVals.color"
                  background-color="grey lighten-2"
                  rounded
                  :value="submissionSeverityDisplayVals.percentage"
                  height="8"
                ></v-progress-linear>
                <span class="capitalize">{{
                  submission.severity.toLowerCase()
                }}</span>
              </div>
            </div>
            <span>Last Modified: {{ submissionDateFormatted }}</span>
          </v-card-text>
          <v-card-actions class="!pt-0">
            <v-icon color="primary" class="ml-auto"> mdi-arrow-right </v-icon>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
// import dayjs from 'dayjs'
export default {
  props: {
    hoverable: { type: Boolean, default: false },
    submission: { type: Object, default: () => {} },
  },
  data() {
    return {}
  },

  computed: {
    ...mapGetters('auth', ['profileImg']),
    ...mapState('program', { program: 'data' }),
    submissionDateFormatted() {
      return 'date'
      //   return dayjs(this.submission.date).format('DD MMM YYYY - HH:mm')
    },
    submisionCVVPercentage() {
      return this.submission.severity.toLowerCase()
    },
    submissionSeverityDisplayVals() {
      return this.extractDisplayValsFromSeverity(this.submission.severity)
    },
  },

  methods: {
    desiredLength(text) {
      return text.slice(0, 35)
    },

    iconSize() {
      return this.$vuetify.breakpoint.mobile ? 12 : 16
    },
    extractDisplayValsFromSeverity(severity) {
      let color = 'darken-2 '
      let percentage
      switch (severity.toLowerCase()) {
        case 'low':
          color += 'green'
          percentage = 25
          break
        case 'medium':
          color += 'yellow'
          percentage = 50
          break
        case 'high':
          color += 'orange'
          percentage = 75
          break
        case 'critical':
          color += 'red'
          percentage = 100
          break
      }
      return { color, percentage }
    },
  },
}
</script>

<style lang="scss" scoped>
.severity-indicator-wrapper {
  flex: 1 1 30%;
  max-width: 30%;
}

// @media screen and (min-width: 999px) {
//   .severity-indicator-wrapper {
//     flex: 1 1 21%;
//     max-width: 21%;
//   }
// }

@media screen and (max-width: 425px) {
  .text-medium {
    font-size: 10px !important;
  }

  .text-small {
    font-size: 10px !important;
  }
  .severity-indicator-wrapper {
    flex: 1 1 40%;
    max-width: 40%;
  }
}

@media screen and (min-width: 600px) and (max-width: 750px) {
  .severity-indicator-wrapper {
    flex: 1 1 40%;
    max-width: 40%;
  }
}
</style>
