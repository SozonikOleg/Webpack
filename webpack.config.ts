import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin}  from 'webpack-bundle-analyzer';
import {buildWebpack} from "./config/build/buildWebpack";


type Mode =   'none' | 'development' | 'production';

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {
    const isDev = env.mode === 'development'

    const config: webpack.Configuration = buildWebpack()
return config;
}