<template>
  <div class="home">
    <p v-copy="copy">我是复制指令</p>
    <p v-longpress="handleLongpress">长按事件</p>
    <button v-debounce="handleDebounce">提交按钮只触发一次</button>
    <br />
    <input type="text" v-emoji />
    <h2>权限----------</h2>
    <p v-permission="1">管理员</p>
    <p v-permission="10">业务员员</p>
    <h2>权限----------</h2>
    <div v-draggable>请拖动我</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      copy: "我是复制内容",
    };
  },
  methods: {
    handleLongpress() {
      alert("长按事件");
    },
    handleDebounce() {
      console.log("只触发一次");
    },
  },
};
</script>
