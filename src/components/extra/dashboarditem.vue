<template>
  <div>
    <div
      class="px-10 py-6 border-b cursor-pointer mainn"
      :class="{ bg_lightpink: current }"
    >
      <div class="flex justify-between mb-2 items-center">
        <div class="flex items-center">
          <span class="font_14 mr-4 bg_gray2 p-2 rounded-md color_pink"
            >#YHW-PGM2453-B</span
          >
          <i class="fas fa-comments"></i>
        </div>
        <span class="font-bold text-gray-300 font_16">2020-12-11</span>
      </div>
      <p class="font-bold my-3 font_16">
        Insecure Direct Object Reference on https:...
      </p>
      <span
        class="font_12 font-bold bg-pink-200 py-2 px-3 rounded-md color_pink"
        >YesWeBot</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboarditem",
  props: ["current"],
};
</script>

<style>
.mainn {
  cursor: pointer;
  background: white;
}
.mainn:hover {
  background: rgb(252, 244, 244) !important;
}
</style>
