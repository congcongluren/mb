const path = require('path');
const { merge } = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
let baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: 'dist/js/[name].[contenthash:7].js',
        path: path.resolve(__dirname, '../', 'dist'),
        chunkFilename: 'dist/js/[name][chunkhash:5].chunk.js',
    },
    target: ['web', 'es5'],
    devtool: false,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [require('autoprefixer')],
                        },
                    },
                    'sass-loader',
                ],
            }
        ],
    },
    plugins: [
        new CleanPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'dist/css/[name].[contenthash:7].css',
        })
    ],
    optimization: {
      minimize: false,
      minimizer: [new TerserPlugin()],
    },
});

