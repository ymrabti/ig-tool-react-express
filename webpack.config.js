const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/webpack',
        publicPath: '/',
        filename: 'bundle.js'
    },
    externals: {
        'react': 'React'
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    devServer: {
        contentBase: './webpack',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    mode:"production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
};