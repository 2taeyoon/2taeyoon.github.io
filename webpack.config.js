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
        // Assets: path.resolve(__dirname, 'src/assets/') // 'Assets' 별칭으로 src/assets 폴더 참조
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
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: 'asset/resource',
        // },
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //   type: 'asset/resource',
        // }
				{
          test: /\.html$/i,
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
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                fallback: "file-loader",
                name: "image/[name].[ext]"
              }
            }
          ]
        }
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: 10000,
        //         fallback: 'file-loader',
        //         name: 'fonts/[name].[ext]',
        //       },
        //     },
        //   ],
        // },
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react"
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
				favicon: "./public/test.png",
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
