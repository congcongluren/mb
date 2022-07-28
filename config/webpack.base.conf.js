const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicCss = [
  {
    loader: MiniCssExtractPlugin.loader,
  },
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
          ],
        ],
      },
    },
  },
]

module.exports = {
  entry: {
    mian: "./src/index.js",
  },
  output: {
    filename: "js/main.js",
    path: resolve(__dirname, "../dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@assets': resolve('assets'),
      '@src': resolve(__dirname, '../src'),
      '@pages': resolve(__dirname, '../src/pages'),
      '@redux': resolve(__dirname, '../src/redux'),
      '@components': resolve(__dirname, '../src/components'),
      '@publicComponents': resolve(__dirname, '../src/publicComponents'),
      '@containers': resolve(__dirname, '../src/containers'),
      '@api': resolve(__dirname, '../src/api'),
      '@actions': resolve(__dirname, '../src/redux/actions'),
      '@features': resolve(__dirname, '../src/redux/features'),
      '@recoil': resolve(__dirname, '../src/recoil'),
      '@utils': resolve(__dirname, '../src/utils'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [...publicCss]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [...publicCss, 'less-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [...publicCss, 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset", // 一般会转换为 "asset/resource"
        generator: {
          filename: "img/[name]_[hash:8][ext]", // 独立的配置
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb （低于8kb都会压缩成 base64）
          }
        },
      },
      // 字体文件
      {
        test: /\.(otf|eot|woff2?|ttf|svg)$/i,
        type: "asset", // 一般会转换为 "asset/inline"
        generator: {
          filename: "icon/[name]_[hash:8][ext]", // 独立的配置
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 // 2kb （低于2kb都会压缩）
          }
        },
      }
    ],
  },
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
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
  ]
};