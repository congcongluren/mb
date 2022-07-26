const path = require("path");
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
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
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "../assets"),//当前工作路径是在dist文件夹内，（dist和public是同级的）
        to: './',//放到output文件夹下，也就是当前工作文件夹dist内
        globOptions: {
          dot: true,
          gitignore: false,
          ignore: [ // 配置不用copy的文件
          ]
        }
      }]
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
});