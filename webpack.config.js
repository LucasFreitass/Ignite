const { resolve } = require('path')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'; // Se ela for diferente de production, quer dizer q estou em ambiente de desenvolvimento
// agora eu vou fazer um if no mode " se eu estou em desenvolvimento eu vou usar o modo 'development' se não 'production' 
// usado da seguinte forma: 
module.exports = {   // EXPORTANDO UM OBJETO DE CONFIGURAÇÕES 
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'soucer-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),  // fala qual é o arquivo principal, inicial da nossa aplicação
    output: {
        path: path.resolve(__dirname, 'dist'),  // fala a pasta de destino
        filename: 'bundle.js' // arquivo de destino, dps de fazer conversão
    },
    resolve: { // é uma nova instrução que recebe um array com várias extensões de arquivos, pois por padrão ele le arquivo js, mas usamos jsx
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        hot: true,
    },

    plugins: [
         isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: { // aqui fica as definições de oq fazer com cada tipo de arquivo recebido, como nossa 
                //aplicação vai se comportar, por ex: se eu importar aquivo .js quero lidar de uma forma, se for .png de outra.
        rules: [ // array de regras
            { // objeto para cada tipo de arquivo
                test: /\.(j|t)sx$/, 
                        // test recebe uma expressão regular que diz se é um arquivo jsx ou não. 
                            // para testar, eu tenho q ver o final do arquivo, pra ver se é .jsx para isso:
                                // Sempre q quero dizer q deve terminar usar o $ antes do cifrão eu digo oq quero testar
                exclude: /node_modules/,
                use: {
                   loader: 'babel-loader',
                   options: {
                    plugins:  [
                        isDevelopment && require.resolve('react-refresh/babel')
                    ].filter(Boolean)
                   },
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
};

