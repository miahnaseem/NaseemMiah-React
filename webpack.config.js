const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // Babel Loader
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                }
            },
            // CSS Loader
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            // Asset Loaders (Images/SVGs)
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset',
                generator: {
                    filename: 'static/media/[name].[hash:8].[ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
            },
            // HTML Loader
            {
                test: /\.html$/i,
                exclude: /index\.html$/, // Exclude your main template file
                type: 'asset/source',    // Loads the file content as a string
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Recommended for React projects
        alias: {
            // Points all 'react' and 'react-dom' imports to your root node_modules
            react: path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        },
    }
};