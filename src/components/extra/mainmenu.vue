<template
  ><div class="menu-container w-full">
    <div class="menu-item">
      <div class="mainmenu">
        <div
          class="item"
          :class="{ active: currentRoute == 'program' }"
          @click.prevent="goto('')"
        >
          <span>Program </span>
        </div>
        <div
          class="item"
          :class="{ active: currentRoute == 'dashboard' }"
          @click.prevent="goto('dashboard')"
        >
          <span>Submission</span>
        </div>

        <!-- <div class="dropdown relative inline-block text-left">
        <div>
          <div
            class="item "
            :class="{
              active: currentRoute != 'setting' && currentRoute != 'dashboard',
            }"
          >
            <span>Program </span><i class="fas fa-angle-down"></i>
          </div>
        </div>

        <div
          class="dropdown-menu   origin-top-right absolute right-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            class="p-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              @click.prevent="$m.showmodal('newprogram')"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              >Add Program</a
            >

            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              @click.prevent="goto('edit')"
              >Edit Program</a
            >
          </div>
        </div>
      </div> -->

        <div
          class="item"
          :class="{ active: currentRoute == 'setting' }"
          @click.prevent="goto('setting')"
        >
          <span>Profile</span>
        </div>
      </div>

      <div>
        <button
          type="button"
          class="border border-gray-200 font-bold bg-gray-200 color_pink rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          SUBSCRIBE NOW
        </button>
      </div>
      <div class="mobilemenu">
        <i class="fas fa-2x fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import programtype from "../extra/programtype";
import { mapState } from "vuex";
export default {
  name: "mainmenu",
  data() {
    return {};
  },
  components: {
    // programtype,
  },
  methods: {
    goto(param) {
      if (param) {
        this.$store.state.currentRoute = param;
      } else {
        this.$store.state.currentRoute = "program";
      }

      this.$router.push(`/${param}`);
    },
  },
  computed: {
    ...mapState({
      currentRoute: (state) => state.currentRoute,
    }),
  },
};
</script>

<style></style>
