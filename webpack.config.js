const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "index.tsx"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public/assets/*.{png,gif,webp}",
          to: "assets/[name][ext]",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    hot: true,
    host: "localhost",
    port: 3001,
  },
};
