<template>
  <div>
    <div
      class="pt-6 border-b cursor-pointer mainn"
      :class="{ bg_pink: current }"
    >
      <div class="px-4">
        <div class="flex justify-between">
          <div class="flex items-center">
            <span
              class="font_12 text-gray-400 mr-4 bg-gray-50 p-2 tracking-wider rounded-md "
              >#YHW-PGM2453-B</span
            >
            <!-- <i class="fas fa-comments color_pink"></i> -->
          </div>
          <!-- <span class="font-bold text-gray-300 font_12">2020-12-11</span> -->
        </div>
        <p class="font-bold my-3  font_13">
          Insecure Direct Object Reference on https:...
        </p>
      </div>
      <!-- <div class="w-ful bg_pink px-5 py-1 font_13 color_white tracking-wider">
        2nd, Oct, 2021 -->
      <!-- <span
          class="font_12 w-full font-bold bg-gray-200 tracking-widest py-2 px-3 rounded-md color_pink"
          >YesWeBot</span
        > -->
      <!-- </div> -->
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
