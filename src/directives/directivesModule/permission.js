/**
 * 权限指令
 */
function checkArraay(key) {
  let arr = [1, 2, 3, 4];
  let index = arr.indexOf(key);
  if (index > -1) {
    return true;
  } else {
    return false;
  }
}

const permission = {
  inserted: function (el, binding) {
    let permisson = binding.value;
    if (permisson) {
      let hasPermission = checkArraay(permisson);
      if (!hasPermission) {
        // 没有权限 移除dom元素
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};

export default permission;
