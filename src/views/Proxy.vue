<template>
  <div>
    Vue设置代理
    <div class="code">
      <pre v-highlight>
      <code>
        devServer: {
            proxy: {
            //   beaseUrl 设置为 /api
            "/api": {
                target: "https://merchant.d.beijuyun.com",
                changeOrigin: true,
                // 查看当前代理的地址
                logLevel: "debug",
                pathRewrite: {
                "^/api": "",
                },
            },
            },
        },
      </code>
    </pre>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
