const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    stats: { children: true, errorDetails: true },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                // exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                // exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.worker\.(c|m)?js$/,
                use: [
                    {
                        loader: 'worker-loader',
                        options: {
                            inline: 'no-fallback',
                        },
                    },
                    'babel-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
        },
    },
};
