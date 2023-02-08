<template>
  <div>
    <partials-header title="Samuel Eto" />

    <v-main>
      <v-container>
        <div class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <div class="d-flex justify-space-between pb-2">
            <div class="headline">Profile Information</div>
            <v-btn color="primary">Flag</v-btn>
          </div>
          <v-divider />

          <div>. . .</div>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
