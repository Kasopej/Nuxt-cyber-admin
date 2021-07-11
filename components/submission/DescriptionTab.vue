<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="py-6" v-html="description" />
  </div>
</template>

<script>
import showdown from 'showdown'

export default {
  props: {
    submission: { type: Object, default: () => {} },
  },

  computed: {
    description() {
      const converter = new showdown.Converter()
      return converter.makeHtml(this.submission.description)
    },
  },
}
</script>
