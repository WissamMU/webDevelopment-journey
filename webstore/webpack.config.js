const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot:false,
        port: 9000,
        open: true,
        devMiddleware: {
            writeToDisk: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: true,
                    sources: false,
                },
            }, {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    }
                    , "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
        filename: "css/stylesheet.css",
    }),
    new CssMinimizerPlugin(),
    ]
};