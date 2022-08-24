module.default = {
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    open: true,
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
