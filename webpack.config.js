const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const mode = isProduction ? 'production' : 'development';

    return {
        mode,
        entry: {
            index: path.join(__dirname, 'src', 'index.tsx'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        devtool: isProduction ? 'nosources-source-map' : 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                    ],
                    exclude: /node-modules/,
                },
                {
                    test: /\.less$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    globalVars: {
                                    }
                                }
                            }
                        }
                    ],
                    exclude: /node-modules/,
                },
                {
                    test: /\.js$|jsx$|ts$|tsx$/,
                    use: ['babel-loader'],
                    exclude: /node-modules/,
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    exclude: /node-modules/,
                },
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            },
            extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
            symlinks: false,
            cacheWithContext: false,
        },
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'initial',
                    },
                },
            },
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            }),
            new webpack.DefinePlugin({
                WEATHER_API_KEY: JSON.stringify(env.weatherAPIKey),
            })
        ],
    };
};