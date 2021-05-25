<template>
  <v-navigation-drawer
    :width="$vuetify.breakpoint.mobile ? '100%' : '320px'"
    style="height: 100vh; min-width: 320px"
    permanent
  >
    <nav class="d-flex flex-column fill-height">
      <div class="grey lighten-5 pa-2 py-4">
        <v-text-field
          dense
          outlined
          label=" Search by or Title"
          no-details
        ></v-text-field>
        <div>
          <v-select
            dense
            outlined
            :items="['All', 'New', 'Under Review', 'Accepted']"
            label="Filter"
          ></v-select>
        </div>
      </div>

      <section class="overflow-y-auto">
        <div
          v-for="submmission in submmissions"
          :key="submmission._id"
          @click="$router.push(`${submmission._id}/`)"
        >
          <v-hover v-slot="{ hover }">
            <article class="pa-4" :class="hover ? 'secondary' : ''">
              <span
                class="
                  caption
                  text-no-wrap
                  grey
                  lighten-4
                  grey--text
                  rounded-lg
                  pa-2
                "
              >
                #{{ submmission.reference }}
              </span>
              <div class="subtitle-2 text-no-wrap overflow-x-hidden pt-2">
                {{ submmission.title }}
              </div>
            </article>
          </v-hover>
          <v-divider />
        </div>
      </section>
    </nav>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      submmissions: [
        {
          actionstate: 'pending',
          _id: '60805255c4ca9b0022f3137f',
          hunterId: '607044ae84a822153464ab67',
          programId: '607a90d36691490022857707',
          title: 'FutureX is a big deal o',
          description: 'This is just a Sample Description.',
          reportedto: 'OgbeniHMMD',
          scope: 'Sample-scope-sha',
          reference: 'Sample-reference-sha',
          cveid: '419',
          bugtype: 'Exposure of user Token via the console',
          notification: true,
          visibility: 'Public',
          reportedat: '2021-04-21T16:27:01.685Z',
          date: '2021-04-21T16:27:01.685Z',
          createdAt: '2021-04-21T16:27:01.689Z',
          updatedAt: '2021-04-21T16:27:01.689Z',
          __v: 0,
        },
        {
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
      ],
    }
  },
}
</script>
