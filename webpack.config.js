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
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "src/index.html"
        })
    ]
} 