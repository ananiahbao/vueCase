const copy = {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        console.log("无复制内容");
        return;
      }
      // 动态创建textare标签
      const textare = document.createElement("textarea");
      // 将该textare 设置为readOnly 防止ios下自动唤起键盘，同时将textare移除可视区域
      textare.readOnly = "readOnly";
      textare.style.position = "absolute";
      textare.style.left = "-9999px";

      // 将要复制的值赋值给textare
      textare.value = el.$value;

      // 将textare插入到body中
      document.body.appendChild(textare);

      // 选中并赋值
      textare.select();

      const result = document.execCommand("Copy");
      if (result) {
        console.log("复制成功");
      }
      document.body.removeChild(textare);
    };
    // 绑定点击事件
    el.addEventListener("click", el.handler);
  },

  // 当传进来的值更新触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },

  // 解绑
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};
export default copy;
