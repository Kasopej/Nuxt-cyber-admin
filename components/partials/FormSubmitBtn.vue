<template>
  <v-btn block color="primary" type="submit" :disabled="progress">
    Authenticate
    <v-progress-circular
      v-if="progress"
      class="ml-5"
      :size="23"
      :width="2"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: String,
    type: String,
    progress: Boolean,
  },
}
</script>

<style lang="scss" scoped></style>
