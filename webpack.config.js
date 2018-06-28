const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const project = require('./project.config.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin')


const envDevelopment = project.env === 'development'
const envProduction = project.env === 'production'
const devtool = project.sourceMap ? 'cheap-source-map' : false


const SRC_DIR = path.join(project.basePath, project.srcDir)


const config = {
    entry: {
        main: [SRC_DIR]
    },
    output: {
        path      : path.resolve(project.basePath, project.outDir),
        filename  : envDevelopment ? 'js/[name].js' : "js/[name].[chunkhash:5].js",
        publicPath: envDevelopment ? "/" : project.publicPath
    },
    mode    : project.env,
    devtool : devtool,
    resolve : {
        modules: [
            project.srcDir,
            'node_modules',
        ],
        alias: {
            '@': SRC_DIR
        },
        extensions: ['*', '.js', '.jsx', '.json', '.less', '.css']
    },
    module : {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use : {
                    loader: 'babel-loader?cacheDirectory'
                },
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test    : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader  : 'url-loader',
                options : {
                    limit     : 10000,
                    outputPath: "images"
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                //多入口配置 单入口并不需要  会生成多入口的公共chunk
                //  commons: {
                //   chunks: "initial",
                //   minChunks: 2,
                //   maxInitialRequests: 5, // The default limit is too small to showcase the effect
                //   minSize: 0, // This is example is too small to create commons chunks
                //   name:"commons"
                // },
                
                
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  chunks: 'initial',
                  name: 'vendors',
                },

    
              }
        },
        removeEmptyChunks:true



    },
    performance: {
        hints: false
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     context : project.basePath,
        //     manifest: path.resolve(project.basePath, 'dll', 'manifest.json')
        // }),
        new HtmlWebpackPlugin({
            template : 'index.html',
            inject   : true,
            favicon  : path.resolve('favicon.ico'),
            
            minify   : {
                collapseWhitespace: true,
            }
        }),
    ]
}

const fontLoader = [['woff', 'application/font-woff'], ['woff2', 'application/font-woff2'], ['otf', 'font/opentype'], ['ttf', 'application/octet-stream'], ['eot', 'application/vnd.ms-fontobject'], ['svg', 'image/svg+xml']]
fontLoader.forEach((font) => {
    let extension = font[0]
    let mimetype = font[1]
    config.module.rules.push({
        test    : new RegExp(`\\.${extension}$`),
        loader  : 'url-loader',
        options : {
            name  : 'fonts/[name].[ext]',
            limit : 10000,
            mimetype,
        },
    })
})

if (envDevelopment) {
    config.module.rules.push({
        test: /(\.less|\.css)$/,
        use: [{
            loader : "style-loader"
        }, {
            loader : "css-loader"
        }, {
            loader : "less-loader",
            options: {
                javascriptEnabled: true
            }
        }]
    })
    // devServer不再使用 这个中间件
    // config.entry.main.push(
    //     'webpack-hot-middleware/client?noInfo=true&reload=true'
    // )
    config.plugins.push(
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    )
    config.devServer =  {
        contentBase:path.resolve(project.basePath),
        
        historyApiFallback: true,
        hot:true,
    }
}

if (envProduction) {
    config.module.rules.push({
        test: /(\.less|\.css)$/,
        use :[
            MiniCssExtractPlugin.loader,
            {
                loader : 'css-loader',
                options: {
                    importLoaders  : 1,
                    minimize: {
                        autoprefixer: {
                            add     : true,
                            remove  : true,
                            browsers: ['last 2 versions'],
                        },
                        discardComments : {
                            removeAll : true,
                        },
                        discardUnused: false,
                        mergeIdents  : false,
                        reduceIdents : false,
                        safe         : true
                    }
                }
            },
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    })
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename     : "css/main.[chunkhash:5].css",
            chunkFilename: 'css/main.[contenthash:5].css'
        }),
        // new CopyWebpackPlugin([{
        //     from : path.join(project.basePath,'dll'),
        //     to   : path.join(project.basePath,'dist','dll')
        // }])
        new BundleAnalyzerPlugin(),

        // 球用没有 还是要服务端配置
        // new CompressionWebpackPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp(
        //         '\\.(' +
        //             ['js','css'].join('|') +
        //         ')$'
        //         ),
        //     threshold: 10240,
        //     minRatio: 0.8
        //     })
        


    )
}

module.exports = config