const path = require('path')
    // 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // entry: 配置入口文件 (从哪个文件开始打包) 
    entry: './src/index.js',

    // output: 配置输出 (打包到哪去)
    output: {
        // 打包输出的目录 (必须是绝对路径)
        path: path.join(__dirname, 'dist'),
        // 打包生成的文件名
        filename: 'bundle.js'
    },

    // 打包模式 production 压缩/development 不压缩
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        // 定义打包好的文件的存放路径和文件名
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        })
    ],
    module: {
        // loader的规则
        rules: [{
                // 正则表达式，用于匹配所有的css文件
                test: /\.css$/,
                // 先用 css-loader 让webpack能够识别 css 文件的内容
                // 再用 style-loader 将样式, 以动态创建style标签的方式添加到页面中去
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            // 配置 less 文件的解析
            {
                test: /\.less$/,
                use: [
                    // 分离出 css 内容
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[hash][name][ext]'
                }
            },
            // 处理字体图标的解析
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset',
                generator: {
                    filename: 'fonts/[hash][ext]'
                }
            }
        ]
    },
    devServer: {
        port: 3000, // 端口号
        open: true // 自动打开浏览器
    }
}