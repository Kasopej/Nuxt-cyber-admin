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
          v-for="x in 50"
          :key="x"
          @click="$router.push(`/submission/${x}/`)"
        >
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
</template>
