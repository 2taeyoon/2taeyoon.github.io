const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "index.js"
    },
    devServer: {
      port: 3000,
      hot: true
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        Pub: path.resolve(__dirname, "public/")
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
				{
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                sources: {
									list: [
										{ tag: "link", attribute: "href", type: "src" },
									]
								}
              }
            }
          ]
        }, // html loader 안 쓰면 패키지 삭제하자
        {
          test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                fallback: "file-loader",
                name: "image/[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react"
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
				favicon: "./public/favicon.ico",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true,
                removeComments: true
              }
            : false
      }),
      new CleanWebpackPlugin()
    ]
  };
};
