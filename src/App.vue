<template>
  <div
    id="app"
    v-waterMarker="{ text: 'ananiah', textColor: 'rgba(180,180,180,.4)' }"
  >
    <div id="nav">
      <router-link to="/">指令</router-link> |
      <router-link to="/about">过滤器</router-link> |
      <router-link to="/proxy">代理</router-link> |
      <router-link to="/svg">svg组件</router-link> |
      <router-link to="/swiper">swiper</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
