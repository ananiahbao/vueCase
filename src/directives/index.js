import copy from "./directivesModule/copy";
import longpress from "./directivesModule/longpress";
import debounce from "./directivesModule/debounce";
import emoji from "./directivesModule/emoji";
import permission from "./directivesModule/permission";
import waterMarker from "./directivesModule/waterMarker";
import draggable from "./directivesModule/draggable";

// 自定义指令
const directives = {
  copy,
  longpress,
  debounce,
  emoji,
  permission,
  waterMarker,
  draggable,
};

export default {
  install(Vue) {
    //   批量注册指令
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
