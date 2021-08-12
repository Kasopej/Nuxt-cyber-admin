<template>
  <v-app dark>
    <div>
      <errors-not-found :title="title" :description="description[title]" />
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      title: this.error.statusCode === 404 ? 404 : 500,
      description: {
        404: "Sorry, the page you're looking for cannot be found.",
        500: 'Whoops, something went wrong on our servers and was unable to complete your request.',
      },
    }
  },
}
</script>
