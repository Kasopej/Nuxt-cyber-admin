<template>
  <v-btn block color="primary" type="submit" :disabled="disabled || progress">
    {{ text }}
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
    text: {
      type: String,
      default: 'Authenticate',
    },
    type: String,
    progress: Boolean,
    disabled: Boolean,
  },
}
</script>

<style lang="scss" scoped></style>
