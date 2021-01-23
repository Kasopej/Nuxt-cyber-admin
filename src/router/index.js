import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../components/editpage/editpage.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../components/settings/settings.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../components/search/search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
