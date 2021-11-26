module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
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
};
