import formatMoney from "./filterModule/formatMonry";
import formatTime from "./filterModule/formatTime";

const filters = {
  formatMoney,
  formatTime,
};

export default {
  install(Vue) {
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    });
  },
};
