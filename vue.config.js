module.exports = {
  parallel: false,
  assetsDir: "static",
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    port: 6312,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "#": require("path").join(__dirname, "public"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
    config.optimization.splitChunks({
      automaticNameDelimiter: ".",
    });
  },
  css: {
    sourceMap: false,
  },
};
