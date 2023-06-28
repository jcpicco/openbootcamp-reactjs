/* eslint-disable */
const path = require('path');

// Plugins y minificadores de CSS y SCSS/SASS
// Para reducir el tamaño de las hojas de estilo en nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del HTML que va a usar Webpack
const miniCssExtractPlugin = require('mini-css-extract-plugin'); // Para reducir los CSS
const { SourceMapDevToolPlugin } = require('webpack'); // Para conocer el Source Map de nuestro proyecto
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Configuraciones de puerto
const port = process.env.PORT || 3000; // Si hay una variable de entorno PORT se usa, sino puerto 3000

// Exportar configuración de Webpack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        inline: true,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // Reglas para archivos de JS y JSX
            // Tienen que psar el linting para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                    'source-map-loader'
                ]
            },
            // Reglas de Babel ES y JSX
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                // TODO: Solucionar ERROR al hacer build
                use: {
                    loader: 'babel-loader'
                },
                query: {
                    presets: [
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            },
            // Reglas para archivos de CSS, SCSS y SASS para minificarlos y cargarlos en el paquete
            {
                test: /(\.css|\.scss|\.sass)$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // Reglas para los archivos de imágenes
            {
                test: /(\.png|\.jpe?g|\.gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        // Template HTML
        new HtmlWebpackPlugin (
            {
                template: './index.html'
            }
        ),
        new MiniCssExtractPlugin (
            {
                filename: './css/styles.css'
            }
        ),
        new SourceMapDevToolPlugin (
            {
                filename: '[file].map'
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
        modules: [
            'node_modules'
        ]
    }
}