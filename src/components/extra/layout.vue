<template>
  <div class="grid grid-cols-8">
    <div class="col-span-6 col-start-2 bg-white contentt">
      <div class="flex justify-between items-center px-5" v-if="title">
        <div>
          <div class="sectionmenu">
            <span class="sectionmenu-item">Home</span>
            <span class="sectionmenu-item">Dashboard</span>
            <span class="sectionmenu-item">Members Mangemnet</span>
            <span class="sectionmenu-item">Hunters Management</span>
          </div>
        </div>
        <div>
          <button
            type="button"
            @click.prevent="$m.showmodal('newprogram')"
            class="border border-gray-200 font-bold bg_pink color_white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          >
            {{ title }}
          </button>
        </div>
      </div>
      <div v-else>
        <div class="search">
          <input type="search" placeholder="Search a Program" />
          <i class="fas fa-search"></i>
        </div>
      </div>

      <hr class="w-100" />

      <div class="p-10">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  props: ["title"],
};
</script>

<style>
.search {
  position: relative;
}
.search input {
  width: 100%;
  padding: 1rem 2rem;
  /* background: rgb(255, 255, 255); */
  text-indent: 2rem;
}
.search i {
  position: absolute;
  left: 1rem;
  top: 35%;
}
</style>
