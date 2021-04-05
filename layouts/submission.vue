<template>
  <v-app>
    <div class="d-flex w-100" style="max-height: 100vh">
      <v-navigation-drawer
        v-if="drawer"
        v-model="drawer"
        width="320px"
        style="height: 100vh; min-width: 320px"
      >
        <nav class="d-flex flex-column fill-height">
          <div class="grey lighten-5 pa-2 py-8">
            <v-text-field
              dense
              outlined
              label=" Search by or Title"
              no-details
            ></v-text-field>
            <div>
              <v-select
                dense
                :items="['All', 'New', 'Under Review', 'Accepted']"
                label="Filter"
              ></v-select>
            </div>
          </div>

          <section class="overflow-y-auto">
            <div v-for="x in 50" :key="x">
              <v-hover v-slot="{ hover }">
                <article class="pa-4" :class="hover ? 'secondary' : ''">
                  <span
                    class="caption text-no-wrap grey lighten-4 grey--text rounded-lg pa-2"
                  >
                    #YHW-PGM2453-B
                  </span>
                  <div class="subtitle-2 text-no-wrap overflow-x-hidden pt-2">
                    Insecure Direct Object Reference on
                    https://www.tekspacelab.com/bla-bla-bla
                  </div>
                </article>
              </v-hover>
              <v-divider />
            </div>
          </section>
        </nav>
      </v-navigation-drawer>

      <main class="flex-grow-1 overflow-y-auto">
        <partials-navigation-bar />
        <nuxt class="pa-4" />
      </main>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      rightDrawer: true,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
