import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin}  from 'webpack-bundle-analyzer';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode =   'none' | 'development' | 'production';

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {
    const isDev = env.mode === 'development'

    console.log("isDev", isDev)

    const config: webpack.Configuration = {
        mode: env.mode,
    entry:{
        helloWorld: path.resolve(__dirname, 'src/index.tsx'),
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
            new BundleAnalyzerPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDev? "style-loader" : MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: 'inline-source-map',
        devServer: {
            port: env.port?? 5000,
            open: true,
            historyApiFallback: true
        }
}
return config;
}