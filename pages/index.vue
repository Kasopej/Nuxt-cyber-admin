<template>
  <v-main
    class="primary pt-60 px-4"
    style="
      background: linear-gradient(to right, #c504da, #6921b6);
      padding-top: 8rem;
    "
  >
    <v-row>
      <!-- Filter menu bar - smaller screens version -->
      <div v-if="mobileView">
        <v-overlay :value="overlay">
          <v-row>
            <v-col cols="12" class="d-flex">
              <PartialsFilterMenuBar
                v-model="filterOptions"
                @toggle-overlay="overlay = !overlay"
              ></PartialsFilterMenuBar>
            </v-col>
          </v-row>
        </v-overlay>
      </div>
      <!-- Filter menu bar - larger screens version -->
      <v-col v-else cols="2" class="d-flex">
        <PartialsFilterMenuBar v-model="filterOptions"></PartialsFilterMenuBar>
      </v-col>

      <!-- Main section containing programs list, search & sort -->
      <v-col :cols="mobileView ? 12 : 10" class="px-4">
        <v-container class="white rounded-lg pa-2 pa-md-8">
          <!-- Search -->
          <header class="d-flex mb-0 mb-md-6">
            <v-col cols="12">
              <div class="mx-auto flex justify-center text-center">
                <input
                  type="search"
                  class="py-4 px-6 bg-primary text-white search-bar border-solid border rounded-lg border-primary placeholder:text-white"
                  style="width: 70%"
                  placeholder="Search programs"
                />
                <v-icon class="relative right-12 cursor" color="white" x-large
                  >mdi-magnify</v-icon
                >
              </div>
            </v-col>
          </header>

          <!-- Sort & Program count -->
          <div class="d-flex px-2">
            <p class="inline-block col-6">
              {{ programs.length }} programs found
              <v-icon v-if="mobileView" @click="overlay = !overlay"
                >mdi-filter</v-icon
              >
            </p>
            <v-select
              id="v-select-sorting"
              v-model="sortBy"
              :items="['newest', 'oldest']"
              class="fit-content ml-auto mt-2 col-6"
              dense
            >
              <template #prepend>
                <v-icon @click="clickSelect">mdi-sort</v-icon>
              </template>
            </v-select>
          </div>

          <!-- Programs List -->
          <main class="pa-2 mx-1">
            <!-- Add new Program Action -->
            <div class="d-flex pb-4">
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

          <!-- Pagination control -->
          <partials-pagination
            v-model="pagination.page"
            :length="pagination.length"
            :page-limit="pageLimit"
            @input="getPrograms"
          ></partials-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import ProgramsIndexBase from '~/components/pages_base_definitions/ProgramsIndex'
export default {
  extends: ProgramsIndexBase,
}
</script>
