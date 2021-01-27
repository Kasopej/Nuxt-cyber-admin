<template src="./main_header.html"> </template>

<script>
import programtype from "../extra/programtype";
import mainmenu from "../extra/mainmenu";
export default {
  name: "main_header",
  data() {
    return {
      currentRoute: "program",
    };
  },
  components: {
    programtype,
    mainmenu,
  },
  methods: {
    goto(param) {
      this.currentRoute = param;
      this.$router.push(`/${param}`);
    },
  },
};
</script>

<style></style>
