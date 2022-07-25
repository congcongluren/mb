const webpack = require('webpack');
const {merge} = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
let baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        allowedHosts: [
            '818ps.com',
            'ue.818ps.com'
        ],
        open: false,
        hot: false,
        port:3000,
        https:true,
        // 设置跨域
        proxy: {
            '/api': {
                target: 'https://818ps.com',
                secure: false,
                changeOrigin: true
                // pathRewrite: {'^/api': ''}
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
        new ESLintPlugin({
            // Plugin options
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            eslintPath: require.resolve('eslint'),
            failOnError: false,
            cache: true,
            cacheLocation: path.resolve(__dirname, '../cache/.eslintcache'),
            // ESLint class options
            cwd: path.resolve(__dirname, '../'),
            resolvePluginsRelativeTo: __dirname,
          }),
    ],
    // devtool: 'eval-cheap-module-source-map',
    devtool: "source-map",
    // mode: "production",
    target: ['web', 'es5'],
    mode: "development",
    optimization: {
        splitChunks:{//可以在这里直接设置抽离代码的参数，最后将符合条件的代码打包至一个公共文件
            chunks: 'all',
            maxSize: 500 * 1024,
            cacheGroups:{
                defaultVendors:{
                    name:'vender',
                    test:/[\\/]node_modules[\\/]/,//匹配node模块中匹配的的模块
                    priority:10,//设置匹配优先级，数字越大，优先级越高
                    chunks:'all',
                },
                styles: {
                    name: 'main',
                    type: 'css/mini-extract',
                    // For webpack@4
                    // test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            }
        },
    },
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
        cacheDirectory: path.resolve(__dirname, '../cache/webpack'),
    }
});
