<template src="./main_header.html"> </template>

<script>
import programtype from "../extra/programtype";
import mainmenu from "../extra/mainmenu";
export default {
  name: "main_header",
  data() {
    return {
      currentRoute: "program",
      program: [
        {
          title: "Premuim  Pen Test",
          icon: "fa-check-circle",
          message:
            "On-demand pen testing in a fixed pay-per-project model, for all of your compliance needs. Launch in as little as 72 hours, and receive vulnerabilities as soon as they are uncovered.",
          program: "Compliance",
          duration: "12 weeks",
          reward: "Montly (Capped)",
          action: "start",
        },
        {
          title: "Vulnerability Disclosure Program",
          icon: "fa-check-circle",
          message:
            "Vulnerability Disclosure Program Points-based managed submission channel for vulnerabilities discovered across any of your internet-facing assets.",
          program: "VDP",
          duration: "Ongoing",
          reward: "Points",
          action: "Continue",
        },
        {
          title: "Bug Bounty Program",
          icon: "fa-check-circle",
          message:
            "Ongoing Bug Bounty Program Active, incentivized, and continuous crowd testing against priority assets that sit anywhere in your SDLC",
          program: "Bug Bounty",
          duration: "Ongoing",
          reward: "Monetary (Top-up)",
          action: "Continue",
        },
      ],
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
