<template src="./third_section.html"> </template>

<script>
import tab from "../extra/tab";
import layout from "../extra/layout";
export default {
  name: "third_section",
  data() {
    return {
      cards: [
        {
          title: "New Program",
          status: "",
          subtitle: "",
          btn: "Start Now",
          message:
            "Start a new program, like a Vulnerability Disclosure Program, Bug bounty Program or a Next Gen Pen Test.",
        },
        {
          title: "Teklabspace forum",
          status: "Pending",
          subtitle: "Classic Pen Test",
          btn: "View Summary",
          message:
            "This program is currently pending. You can view what you’ve sent to us for review just in case you need to double-check.",
        },
        {
          title: "Teklabspace.com",
          status: "In Progress",
          subtitle: "",
          btn: "Continue",
          message:
            "We’ve saved your progress. Click to continue launching your Bug Bounty Program",
        },
        {
          title: "Test",
          status: "In Progress",
          subtitle: "",
          btn: "Continue",
          message:
            "We’ve saved your progress. Click to continue launching your Bug Bounty Program",
        },
        {
          title: "Teklabspace.com",
          status: "In Progress",
          subtitle: "",
          btn: "View Summary",
          message:
            "We’ve saved your progress. Click to continue launching your Bug Bounty Program",
        },
      ],
    };
  },
  components: {
    tab,
    layout,
  },
};
</script>

<style></style>
