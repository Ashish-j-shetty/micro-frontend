const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        microFrontEnd1: "microFrontEnd1@http://localhost:8001/remoteEntry.js",
        microFrontEnd2: "microFrontEnd2@http://localhost:8002/remoteEntry.js",
        reactMicroFrontEnd3:
          "reactMicroFrontEnd3@http://localhost:8003/remoteEntry.js",
      },
    }),
  ],
};
