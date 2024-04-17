import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode =   'none' | 'development' | 'production';

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {
    console.log("env", env )
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
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})
        ],
        module: {
            rules: [
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
            open: true
        }
}
return config;
}