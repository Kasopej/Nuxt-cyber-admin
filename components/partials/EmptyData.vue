<template>
  <section class="py-12 text-center">
    <v-img src="/images/no-data.svg" :max-height="maxHeight" contain />
    <div class="subtitle-1 text-center accent--text font-weight-bold py-8">
      {{ caption }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: 'Nothing Found',
    },
    maxHeight: {
      type: Number,
      default: 400,
    },
  },
}
</script>
