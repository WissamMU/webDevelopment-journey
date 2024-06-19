const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    }, module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
        filename: "product.html",
        template: "./src/index.html"
    })]
};