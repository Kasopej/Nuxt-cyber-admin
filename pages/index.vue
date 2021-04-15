<template>
  <div>
    <partials-header title="Programs" />

    <v-main>
      <v-container>
        <div class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <div class="d-flex justify-space-between pb-2">
            <div class="headline">Dashboard</div>
            <v-btn color="primary">Add</v-btn>
          </div>
          <v-divider />

          <v-card v-for="i in 3" :key="i" class="d-flex mt-6">
            <v-img
              src="/images/dummy.jpg"
              width="250"
              max-width="250"
              height="200"
              cover
            />
            <div class="flex-grow-1 d-flex justify-space-between w-full pa-4">
              <div class="flex-grow-1 d-flex flex-column justify-space-between">
                <div>
                  <header class="headline font-weight-bold">
                    Program Name
                  </header>
                  <div class="grey--text text--darken-2 py-3">
                    <v-icon small class="mr-2">mdi-gift</v-icon> $150 - $2,500
                    Per vulnerability
                  </div>
                </div>

                <div class="grey--text text--darken-3">
                  <div class="pb-1">
                    <v-icon small class="mr-2">mdi-counter</v-icon
                    ><strong>3</strong> Submissions
                  </div>
                  <small><em>Vulnerability Disclosure Program</em></small>
                </div>
              </div>

              <div
                class="d-flex flex-column justify-space-between text-right subtitle-1"
              >
                <div class="grey--text text--darken-2 px-4">In Progress</div>
                <v-btn
                  text
                  color="accent"
                  class="text-capitalize subtitle-1 font-weight-bold"
                  >View Summary</v-btn
                >
              </div>
            </div>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
}
</script>
