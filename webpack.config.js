/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

module.exports = {

    mode:"development",
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
    },

    devServer: {
        constenBase: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    }
}

/* eslint-enable */
