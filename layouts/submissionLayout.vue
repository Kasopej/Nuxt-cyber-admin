<template>
  <v-app>
    <div class="" style="height: 100%">
      <partials-navigation-bar submission />

      <div class="pg-root mt-1">
        <div class="pg-sidebar" :class="{ 'has-content': submissionSelected }">
          <div class="pg-sidebar-content">
            <submission-sub-sidelist />
          </div>
        </div>
        <div class="pg-info" :class="{ 'has-content': submissionSelected }">
          <div class="pg-info-content px-4">
            <nuxt />
          </div>
        </div>
      </div>
    </div>

    <partials-notification-toast />
    <partials-mobile-navigation-drawer />
    <misc-go-twofa />
  </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('submission')
export default {
  data() {
    return {}
  },

  computed: {
    ...mapState(['submissionSelected']),
  },
}
</script>

<style lang="scss" scoped>
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';

.pg-root {
  display: flex;
  position: relative;
  height: 100vh;
}

.pg-root .pg-sidebar .pg-sidebar-content,
.pg-root .pg-info .pg-info-content {
  margin-top: 6rem;
}

@media (max-width: 768px) {
  .pg-root .pg-sidebar {
    height: 100vh;
    max-width: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .pg-root .pg-sidebar.has-content {
    width: 0px;
  }

  .pg-root .pg-info.has-content {
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: block;
  }

  .pg-root .pg-info {
    padding-left: 0px;
    display: none;
  }
}

@media (min-width: 768px) {
  .pg-root .pg-info {
    padding-left: 310px;
    height: 100vh;
    width: 100%;
    background-color: unset;
  }

  .pg-root .pg-sidebar {
    position: fixed;
    width: 310px;
    height: 100vh;
    left: 0;
    bottom: 0;
    border-right: 1px solid rgba(223, 225, 231, 0.932);
    overflow-y: auto;
  }
}
</style>
