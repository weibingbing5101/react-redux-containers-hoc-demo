let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离插件 将css和JS分离打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

console.log(path.resolve('dist')); // /Users/weiweibing/z_各种demo/px_webpack/dist
console.log(__dirname); // /Users/weiweibing/z_各种demo/px_webpack
console.log(path.resolve(__dirname, 'dist')); // /Users/weiweibing/z_各种demo/px_webpack/dist

module.exports = {
    'entry': './src/index.jsx',
    'devtool':'cheap-module-eval-source-map',
    'output': {
        'filename': 'bundle.[hash].js',
        'path': path.resolve('dist'), // css js html打包存放的 绝对路径
        // 'publicPath': '/assets/',  // cdn 静态资源服务器地址  
        // <img src="/assets/images/f063efbf.goopal_logo.png" alt="">
        // <script type="text/javascript" src="/assets/bundle4e55895415e911048f2b.js"></script>
    },
    module: {
        rules: [
            // babel编译   1、安装预设 npm install babel-preset-es2015 --save-dev  2、手动生成  touch .babelrc写入 es2015
            // 解析测试阶段的es版本的编译器 例如解构赋值 yarn add babel-preset-stage-0 -dev  .babelrc再写入stage-0
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },



            // 图片解析  yarn add file-loader url-loader -dev  limit 大于8K的不转base64  name保存路径 文件名 拓展名
            { test: /\.(jpg|gif|png)$/, use: ['file-loader?limit=8000&name=images/[name].[hash:8].[ext]'] },



            // css编译     1、npm install style-loader css-loader --save-dev  use 优先顺序是从右往左写
            // { test: /\.css$/, use: ['style-loader','css-loader']},  此处老的写法
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'autoprefixer-loader']
                })
            },


            // less sass stylus编译  1、 yarn add less-loader less -dev  编译顺序 less css style标签  浏览器的前缀
            // {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},  老写法
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'autoprefixer-loader', 'less-loader']
                })
            },


            // 处理html中图片
            { test: /\.html$/, loader: 'html-withimg-loader' }
        ]
    },
    resolve: {
        extensions: ['.jsx','.js', '.json']  // 文件拓展名
    },
    plugins: [
        // html 插件自动注入JS 并生成到output path 文件夹下  yarn add html-webpack-plugin -dev
        new HtmlWebpackPlugin({
            // filename: 'index.html',  // 插件生成后的名字
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin("[name][hash].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'   // 注入环境
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        port: 9999
    }
}

/* 总结
    index.html  
        script 标签不用写  webpack打包后 html会自动生成并加hash 
        img  src写当前路径可以找到的路径（不是写打包后的路径）

    css
        图片路径和html中img标签src相同的路径（不是写打包后的路径）

    css html js中引用的图片  打包时根据27行图片加载器生成文件     但是css html js对图片的引用路径是根据自己的路径而配置的

    

    package.json
        cli配置
            -p 代码压缩
            -d 资源地图
            devtool  开发工具




*/
