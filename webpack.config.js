const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
 
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/assets', to: '' },
            ],
          }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src/assets'),
        },
        compress: false,
        open: false,
        hot: true,
        port: 8080,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
