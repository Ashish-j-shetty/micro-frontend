const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8002,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "microFrontEnd2",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroFrontend2Index": "./src/index.js",
      },
    }),
  ],
};
