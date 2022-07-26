const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    extensions: [".js", ".ts" ],
    alias: {
      "@": resolve(__dirname, 'src/'),
      "&": resolve(__dirname, 'assets'),
      "~": resolve(__dirname, 'src/utils'),
    }
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: ['babel-loader']
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: [
          // "babel-loader",
          "ts-loader",
        ],
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
        collapseWhitespace: false,
        // 移除注释
        removeComments: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
  ]
};