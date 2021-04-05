<template>
  <header
    class="primary py-16"
    style="background: linear-gradient(to right, #c504da, #6921b6)"
  >
    <div
      class="py-16 text-center white--text display-1 font-weight-bold"
      v-text="title"
    />
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '{Title Here}',
    },
  },
}
</script>
