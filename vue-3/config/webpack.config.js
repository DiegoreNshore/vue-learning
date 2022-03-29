const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader")


module.exports = {
    entry: {
        // Así se declaran diferentes puntos de entrada.
        "vue-bundle": "./exercises/index.js", 
    },
    output:{
        filename: "[name].js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/i, // Using Babel to use ES6
                exclude: /node_modules/,
                use: [
                  { loader: "babel-loader" }
                ]
            },
            {
              test: /\.vue$/,
              use: [{loader: "vue-loader"}]
            },
            {
                test: /\.html/i, // Loading HTML
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset",
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./exercises/index.html", // De donde toma el html
            filename: "./index.html", // Como se llama el archivo
            inject: 'body', // Es la ubicación donde inyectará el script "head || body || defer"
            chunks: ["vue-bundle"], // Indica que chunk le pertenece a este archivo
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
} 