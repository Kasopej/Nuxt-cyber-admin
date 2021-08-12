<template>
  <div>
    <v-container class="mt-2">
      <v-row align="sm-center" class="contain my-sm-10">
        <v-col cols="12" sm="6" class="">
          <div class="text-center text-sm-right mt-3 ml-sm-4 mb-2 mb-sm-0">
            <img
              class="w-60 w-sm-100 mx-auto"
              src="/images/think.svg"
              alt="Image Description"
              style="max-width: 18rem"
            />
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
          class="text-center text-sm-left pb-4 pb-sm-0"
        >
          <h1 class="error-title pb-2">{{ title }}</h1>
          <h3 class="dark--text text--lighten-2">{{ description }}</h3>
          <div class="d-flex justify-center justify-sm-start align-center">
            <v-btn class="mr-3 mt-4" outlined color="primary">
              <NuxtLink class="text-primary text-capitalize" to="/">
                Go Home
              </NuxtLink>
            </v-btn>
            <a
              target="_blank"
              href=""
              class="btn btn-warning py-2 mt-3 shadow-sm"
              >Chat support</a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.error-title {
  font-size: 3rem;
}

.w-60 {
  width: 60%;
}

.contain {
  background-color: rgba(2555, 255, 255, 0.34);
  border-radius: 0.75rem;
}

@media (min-width: 567px) {
  .my-sm-10 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .w-sm-100 {
    width: 100%;
  }
}
</style>
