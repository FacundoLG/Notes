const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, arg) => {
  const isDevelopment = arg.mode === "development";
  return {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.jsx|.js/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/public/index.html",
      }),
    ],
    devtool: isDevelopment ? "source-map" : false,
    devServer: {
      historyApiFallback: true,
    },
  };
};
