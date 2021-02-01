<template src="./editsection.html"> </template>

<script>
import layout from "../extra/layout";
import customtextfield from "../extra/customtextfield";
export default {
  name: "editsection",
  data() {
    return {
      fields: "",
      scope: 1,
      outscope: 1,
    };
  },
  components: {
    layout,
    customtextfield,
  },
  methods: {
    addscope() {
      this.scope = ++this.scope;
    },
    deletescope() {
      if (this.scope > 1) {
        this.scope = --this.scope;
      }
    },
    outscopee() {
      this.outscope = ++this.outscope;
    },
    deleteoutscope() {
      if (this.outscope > 1) {
        this.outscope = --this.outscope;
      }
    },
  },
};
</script>

<style>
.flex-1 {
  flex: 1;
}
.flex-2 {
  flex: 2;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-5 {
  flex: 5;
}
.form-control {
  text-indent: 1rem;
  padding: 0.7rem;
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
}

@media screen and (max-width: 40.6em) {
  /** 650px /16 */
  .visibility__box,
  .visibility__boxinner,
  .collaboration__box {
    flex-direction: column;
  }

  .visibility__boxinner {
    align-items: end;
  }

  .minimum_reward {
    width: 100%;
  }
}
@media screen and (max-width: 58.125em) {
  /** 930px /16 */
  .program_support_lang {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .program_support_lang > :nth-child(2) {
    padding: 0;
    margin-top: 9px;
  }

  .rewardtype__options,
  .program__desc {
    flex-direction: column;
  }

  .program__desc > * {
    flex: 1;
    width: 100%;
  }
}
</style>
