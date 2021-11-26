<template>
  <div class="about">
    <h1>filter</h1>
    <p>{{ money | formatMoney }}</p>
    <p>{{ time | formatTime }}</p>
    <p>全局过滤器： {{ time | timeForamt }}</p>
    <p>局部过滤器： {{ time | timesFormats }}</p>
    <div class="code">
      <pre v-highlight>
      <code>
        // 注意：此处有s
        filters: {
          timesFormats(str) {
            return moment(str).format("YYYY-MM-DD hh:mm:ss");
          },
        },
      </code>
    </pre>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      money: "10",
      time: 1637653439272,
    };
  },
  // 注意：此处有s
  filters: {
    timesFormats(str) {
      return moment(str).format("YYYY-MM-DD hh:mm:ss");
    },
  },
};
</script>
<style lang="scss">
.code {
  height: 200px;
  text-align: left;
}
</style>
