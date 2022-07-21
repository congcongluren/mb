const path = require("path");
const { merge } = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
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
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "../assets"),//当前工作路径是在dist文件夹内，搜易这里的from就是项目目录/public文件夹内。（dist和public是同级的）
        to: './',//放到output文件夹下，也就是当前工作文件夹dist内
        globOptions: {
          dot: true,
          gitignore: true
        }
      }]
    }),
  ],
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
});