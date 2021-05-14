const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { PROJECT_PATH } = require('../constant')
const { isDev, isProd } = require('../env')

const getCssLoader = importLoaders =>
  [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true, // 开启css模块化
        sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
        importLoaders // 指定在 CSS loader 处理前使用的 laoder 数量
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            require('postcss-flexbugs-fixes'),
            isProd && [
              'postcss-preset-env',
              {
                autoprefixer: {
                  /**
                   * grid:
                   * false （默认）：阻止自动前缀生成器输出CSS Grid转换
                   * "autoplace"：启用Autoprefixer网格转换并包括自动放置支持
                   * "no-autoplace"：启用Autoprefixer网格转换，但不支持自动放置
                   */
                  grid: 'autoplace',
                  flexbox: 'no-2009' // flexbox: "no-2009"只会为规范的最终版本和IE版本添加前缀 false将禁用flexbox属性前缀。
                },
                stage: 3
              }
            ]
          ]
        }
      }
    }
  ].filter(Boolean)

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoader(1)
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoader(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoader(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html', cache: true })]
}
