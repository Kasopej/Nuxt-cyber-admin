<template>
  <div
    class="p-4"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="options-menu"
  >
    <!-- <a href="#" role="menuitem" class="block list_item font_12 pb-4 color_pink">Latest Actvities</a> -->
    <div class="flex justify-between items-center mb-4" role="menuitem">
      <h3 class="font_12 font-bold">
        Reported
      </h3>

      <span @click="close()" class="font_16 font-bold cursor-pointer"
        >&times;</span
      >
    </div>

    <div class="mb-4 flex flex-col font_12">
      <label for="from" class="color_gray">From</label>
      <input type="text" class="form-control" placeholder="YYYY-MM-DD" />
    </div>

    <div class="mb-4 flex flex-col font_12">
      <label for="to" class="color_gray">To</label>
      <input type="text" class="form-control" placeholder="YYYY-MM-DD" />
    </div>

    <h3 class="font_12 font-bold mb-4">
      Statuses
    </h3>
    <div class="option mb-3">
      <div class="flex font_10 mb-2">
        <input type="checkbox" class="mr-3" /><span>Open</span>
      </div>
      <div class="pl-3">
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>New</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Under Review</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Accepted</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span
            >More information needed</span
          >
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span
            >Ask for Verification</span
          >
        </div>
      </div>
    </div>
    <div class="option mb-3">
      <div class="flex font_10 mb-2">
        <input type="checkbox" class="mr-3" /><span>Closed</span>
      </div>
      <div class="pl-3">
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Resolved</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Informative</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Not fix</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Spam</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Out of Scope</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Not Applicable</span>
        </div>
      </div>
    </div>
    <div class="option mb-3">
      <div class="flex font_10 mb-2">
        <input type="checkbox" class="mr-3" /><span>Mark as Read</span>
      </div>
      <div class="pl-3">
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Read</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Unread</span>
        </div>
      </div>
    </div>
    <div class="option mb-3">
      <div class="flex font_10 mb-2">
        <input type="checkbox" class="mr-3" /><span>Rewards</span>
      </div>
      <div class="pl-3">
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Reward</span>
        </div>
        <div class="flex font_10">
          <input type="checkbox" class="mr-3" /><span>Not Reward</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popupone",
  props: ["closeup"],
  methods: {
    close() {
      this.$emit("closeup");
    },
  },
};
</script>

<style></style>
