<template>
  <div>Logging out. Please, wait!</div>
</template>

<script>
export default {
  mounted() {
    this.$router.replace(this.prependAdminRoute + '/account/login')
  },
}
</script>
