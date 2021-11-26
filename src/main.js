import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Directives from "./directives";
import filters from "./filter";
import timeForamt from "./plugin/filter";
import highlight from "./plugin/highlight";
import "./until/icons";

Vue.config.productionTip = false;
Vue.use(Directives);
Vue.use(filters);
Vue.use(highlight);
// 全局过滤器
Vue.filter("timeForamt", timeForamt);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
