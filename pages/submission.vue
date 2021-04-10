<template>
  <main>
    <div v-for="i in 100" :key="i">S U B M I S S I O N {{ i }}</div>
  </main>
</template>

<script>
export default {
  layout: 'submission',
}
</script>
