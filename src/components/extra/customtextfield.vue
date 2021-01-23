<template>
  <div class="bg-white shadow-md rounded-sm mb-7">
    <div class="flex justify-between py-4 px-7 border-b-2">
      <div class="flex">
        <div class="flex items-center">
          <slot name="tab"></slot>
          <slot name="select"></slot>
        </div>
      </div>
      <div class="flex items-center font_14">
        <p>
          Styling with
          <span class="font_12 color_pink">MarkDown is supported</span>
        </p>
      </div>
    </div>
    <div class="h-52 p-3">
      <textarea class=" w-full h-full border-none"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "customtextfield",
};
</script>

<style></style>
