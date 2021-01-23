<template src="./main_header.html"> </template>

<script>
import programtype from "../extra/programtype";
export default {
  name: "main_header",
  components: {
    programtype,
  },
  methods: {
    goto(param) {
      this.$router.push(`/${param}`);
    },
  },
};
</script>

<style></style>
