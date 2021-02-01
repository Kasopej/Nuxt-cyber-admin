<template>
  <div>
    <div class="content">
      <div class="content-1">
        <div
          v-randombg
          class="h-16 w-16  rounded-sm flex justify-center items-center"
        >
          <i class="far fa-2x color_white" :class="[item.icon]"></i>
        </div>
      </div>
      <div class="content-2">
        <p class="font_19 font-bold">{{ item.title }}</p>
        <p class="my-2">
          {{ item.message }}
        </p>
        <div class="details">
          <div>
            <p class="font_18 font-bold">Program</p>
            <p class="font_14">{{ item.program }}</p>
          </div>
          <div>
            <p class="font_18 font-bold">Duration</p>
            <p class="font_14">{{ item.duration }}</p>
          </div>
          <div>
            <p class="font_18 font-bold">Rewards</p>
            <p class="font_14">{{ item.reward }}</p>
          </div>
        </div>
        <!-- <div class="mt-9">
          <div class="relative pt-1">
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
            >
              <div
                style="width:30%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <p>17% Complete</p>
        </div> -->
      </div>

      <div class="content-1">
        <p
          class="color_pink font-bold cursor-pointer"
          @click.prevent="$router.push('/edit')"
        >
          {{ item.action }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "programtype",
  props: ["item"],
};
</script>

<style>
.content {
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  margin: 1rem 0rem;
  padding: 1rem;
}
.content .content-1 {
  flex: 1;
  display: flex;
  justify-content: center;
}
.content .content-2 {
  flex: 7;
}
.details {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.details div {
  /* border-right: 1px solid gray;
  padding: 2rem; */
}
</style>
