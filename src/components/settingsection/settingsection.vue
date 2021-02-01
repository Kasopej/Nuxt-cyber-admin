<template src="./settingsection.html"> </template>

<script>
import layout from "../extra/layout";
export default {
  name: "settingsection",
  components: {
    layout,
  },
  data() {
    return {
      editable: true,
    };
  },
  methods: {
    enableEdit() {
      this.editable = false;
    },
    updateEdit() {
      this.editable = true;
    },
  },
};
</script>

<style>
@media screen and (max-width: 38.75em) {
  /** 620px /16 */
  .setting__input {
    grid-column: span 2 / span 2;
  }

  .sectionmenu .sectionmenu-item {
    font-size: 13px;
  }
}
</style>
