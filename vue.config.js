module.exports = {
  //关闭eslint
  lintOnSave: false,
  publicPath: "./",
  //代理跨域
  devServer: {
    open: true,
    port: 10099,
    proxy: {
      "/foo": {
        target: "http://ai-svc-test.yoyi.com.cn/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/foo": "",
        },
      },
    },
  },
};
