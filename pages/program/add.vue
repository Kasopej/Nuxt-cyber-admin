<template>
  <div>
    <partials-header title="Add a Program" />

    <v-main>
      <v-container>
        <main class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <v-breadcrumbs divider=">" :items="breadcrumbsItems"></v-breadcrumbs>

          <div>
            <div class="pt-8">
              <label>
                <v-img
                  :src="'/images/dummy.jpg'"
                  class="rounded"
                  width="250"
                  contain
                />
                <small class="grey--text text-center pt-3">Thumbnail</small>
                <v-file-input class="d-none" accept="image/jpeg, image/png" />
              </label>
            </div>
          </div>

          <div class="py-4">
            <v-text-field block outlined label="Program Name" />
          </div>
        </main>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',

  data() {
    return {
      breadcrumbsItems: [
        {
          text: 'Dashboard',
          disabled: false,
          to: 'breadcrumbs_dashboard',
        },
        {
          text: 'Add Program',
          disabled: true,
          to: '/prrogram/add/',
        },
      ],
    }
  },
}
</script>
