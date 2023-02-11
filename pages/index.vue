<template>
  <nuxt-child :key="$route.fullpath"></nuxt-child>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
}
</script>
