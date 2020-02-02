const webpack =require("webpack");
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        contentBase: "./dist",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "src/index.html"
        })
    ]
} 