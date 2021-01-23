import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/less/main.css";
import displayPlugin from "./plugins/plugins";
import modal from "../src/components/extra/modal";

Vue.config.productionTip = false;
Vue.use(displayPlugin);
Vue.component("modal", modal);

Vue.directive("randombg", function(el) {
  let colors = [
    `linear-gradient(to right, #DA04F2 , #7024C4)`,
    `linear-gradient(to right, #C21975 , #FDA62D)`,
    `linear-gradient(to right, #7922C8 , #7922C8)`,
    `linear-gradient(to right, #D704EF , #D704EF)`,
  ];

  el.style.backgroundImage = colors[Math.floor(Math.random() * colors.length)];
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
