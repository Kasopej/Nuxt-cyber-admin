<template>
  <v-main
    class="primary pt-60"
    style="
      background: linear-gradient(to right, #c504da, #6921b6);
      padding-top: 8rem;
    "
  >
    <v-container>
      <main class="white rounded-lg pa-2 pa-md-8 mx-1">
        <!-- Add Program Action -->
        <div class="d-flex pb-4">
          <!-- <v-breadcrumbs
            large
            divider="»"
            :items="[{ text: 'Dashboard', disabled: false, to: '/' }]"
            class="pa-0"
          /> -->
          <v-btn color="primary" to="/program/new">Add Program</v-btn>
        </div>

        <section v-if="$fetchState.pending">
          <v-skeleton-loader
            v-for="h in 3"
            :key="h"
            type="article, actions"
            class="py-2"
          ></v-skeleton-loader>
        </section>

        <section v-else-if="$fetchState.error" class="py-8">
          <v-img src="/images/server-down.svg" max-height="420" contain />
          <div
            class="subtitle-1 text-center accent--text font-weight-bold py-8"
          >
            Something Occured
          </div>
        </section>

        <v-row v-else>
          <template v-if="programs.length" class="row d-flex mx-auto">
            <v-col
              v-for="program in programs"
              :key="program._id"
              cols="12"
              md="4"
            >
              <program-item-card :program="program" />
            </v-col>
          </template>

          <partials-empty-data v-else caption="No Programs Available" />
        </v-row>
      </main>
    </v-container>
  </v-main>
</template>

<script>
import ProgramsIndexBase from '~/components/pages_base_definitions/ProgramsIndex'
export default {
  extends: ProgramsIndexBase,
}
</script>
