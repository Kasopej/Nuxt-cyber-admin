<template>
  <div class="my-5" @click="$router.push('/edit')">
    <div class="grid grid-cols-8">
      <div
        v-randombg
        class="rounded-l-md col-span-2  flex justify-center items-center"
      >
        <button
          type="button"
          class="border border-gray-200 font-bold bg-gray-200 color_pink rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          {{ button }}
        </button>
      </div>
      <div class="col-span-6 border-2 border-gray-100 p-10 rounded-r-md">
        <div class="flex justify-between">
          <div>
            <p class="font-bold font_19">{{ title }}</p>
            <span class="font_14">{{ subtitle }}</span>
          </div>
          <p class="font-bold font_16 color_pink">{{ status }}</p>
        </div>
        <p class="mt-10">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: ["status", "title", "button", "message", "subtitle"],
};
</script>

<style></style>
