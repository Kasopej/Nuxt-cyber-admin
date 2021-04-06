<template>
  <v-snackbar v-model="state" :color="color">
    <v-icon class="mr-3">{{ icon }}</v-icon>
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '{Text Here}',
    },
    color: {
      type: String,
      default: 'accent',
    },
    icon: {
      type: String,
      default: 'mdi-information-outline',
    },
  },

  computed: {
    state: {
      get() {
        return this.status
      },
      set() {
        return !this.status
      },
    },
  },

  created() {
    console.log(this.state, this.status)
  },
}
</script>
:
