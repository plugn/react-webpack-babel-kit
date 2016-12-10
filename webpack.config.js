const PATH = require('path');
const WEBPACK = require('webpack');
const DEV_SERVER_CONFIG = require('./dev-server-config');
const DEFAULT_HOT_ENTRY = [
    `webpack-dev-server/client?http://${DEV_SERVER_CONFIG.host}:${DEV_SERVER_CONFIG.port}`,
    'webpack/hot/only-dev-server'
]

var ExtractTextPlugin = require('extract-text-webpack-plugin');


function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }
    
    return false 
}

module.exports = {
    entry: {
        main: DEFAULT_HOT_ENTRY.concat(['./src/scripts/main'])
    },
    output: {
        path: PATH.join(__dirname, 'dist/scripts'),
        publicPath: '/static/',
        filename: '[name].js'
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            { 
                test: /\.json$/, 
                loader: 'json' 
            }
        ]
    },
    plugins: [
        new WEBPACK.HotModuleReplacementPlugin(),
        new WEBPACK.NoErrorsPlugin(),
        new ExtractTextPlugin('main.css', {
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    },
    devServer: DEV_SERVER_CONFIG
}