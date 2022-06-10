const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "microFrontEnd1",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroFrontend1Index": "./src/index",
      },
    }),
  ],
};
