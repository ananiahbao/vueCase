import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/proxy",
    name: "Proxy",
    component: () =>
      import(/* webpackChunkName: "Proxy" */ "../views/Proxy.vue"),
  },
  {
    path: "/svg",
    name: "Svg",
    component: () => import(/* webpackChunkName: "Proxy" */ "../views/Svg.vue"),
  },
  {
    path: "/swiper",
    name: "Swiper",
    component: () =>
      import(/* webpackChunkName: "Proxy" */ "../views/Swiper.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
