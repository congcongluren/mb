const { resolve } = require("path");
const { merge } = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
const { ProgressPlugin } = require('webpack');


module.exports = merge(baseWebpackConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        port: 443,
        host: '127.0.0.1',
        allowedHosts: [
            'localhost',
        ],
        open: true,
        https: true,
        static: {
            directory: resolve(__dirname, '../assets'),
        },
        proxy: {
            '/api': 'https://localhost/'
        },
        client: {
            webSocketURL: 'ws://0.0.0.0:443/ws',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    plugins: [
        new ProgressPlugin({
            activeModules: false,
            entries: true,
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: 'entries',
        }),
    ]
});