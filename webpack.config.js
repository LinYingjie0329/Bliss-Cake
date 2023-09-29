const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "src/Home/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./Home/index.js"
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [,
    new HtmlWebpackPlugin({
      filename: "./Home/index.html",
      template: path.join(__dirname, "src/Home/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "./Home/index.css"
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin()
    ]
  }
}