const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            scriptLoading: "blocking",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
};