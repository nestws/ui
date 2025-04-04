# nestws ui
A modular design system for developing web interfaces fastly with React.\
Nestws UI is a typescript project with supported by Webpack.

## Installation
#### 1. Start an empty npm project with package.json file:
```
npm init -y
```
#### 2. Create .gitignore file in root and paste this lines before install:
```
node_modules
package-lock.json
```
#### 3. Install nestws ui:
```
npm i @nestws/ui
```
#### 4. Create tsconfig.json file in root and paste this configs:
```
{
  "compilerOptions": {
      "jsx": "react",
      "allowSyntheticDefaultImports": true,
      "lib": [
        "dom"
      ],
      "module": "esnext",
      "moduleResolution": "node",
    }
}
```
#### 5. Create webpack.config.js file in root and paste this configs:
```
const path = require("path");
const webpack = require('webpack');

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
    output: {
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: 'auto', // for page refresh for BrowserRouter
        clean: true, // clean the output directory before emit.
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // required for code splitting files!
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less'], // resolve these extensions
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/, // load js and jsx files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(ts|tsx)?$/, // load ts and tsx files
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.less$/i, // load less files
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                // enable strict math mode, requiring parentheses for operations
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i, // load css files
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/, // load svg files
                use: "svg-url-loader",
            },
        ],
    },
}

module.exports = (env, argv) => {

    // set build folder
    config.output.path = path.resolve(__dirname, 'build');

    // production configures
    if (argv.mode === 'production') {
        config.devtool = false; // when production mode for reducing output file sizes
    }

    // development configures
    if (argv.mode === 'development') {

        // dev server settings
        config.devServer = {
            host: 'localhost', // localhost
            port: 3000, // port number
            open: true, // Opens browser on a new tab automatically
            historyApiFallback: true, // enable page refresh
            hot: true, // always make hot refresh when code updated
        };

    }

    // send custom variables to process.env (optional)
    const customVars = {
        //EXAMPLE: JSON.stringify('Example'),
    };

    // plugins
    config.plugins = [
        new HtmlWebPackPlugin({
            template: "./src/index.html", // your index.html file
            favicon: "./public/favicon.ico", // your favicon file
        }),
        new webpack.DefinePlugin({
            process: { env: customVars }
        }),
        new CopyPlugin({
            patterns: [{ from: "public" }], // copy all your files from public folder
        }),
    ]

    return config;

};
```
#### 6. Add scripts to your package.json file:
```
"scripts": {
    "build": "webpack --mode production",
    "start": "webpack serve --mode development"
}
```
#### 7.1. Create empty src/ folder:
#### 7.2. Create an empty index.html file in src/ folder and paste:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Your Title</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="app"></div>
</body>
</html>
```
#### 8. Create an empty index.js file in src/ folder and paste:
```
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// import nestws ui core files
import "@nestws/ui/less/ui.less";
import "@nestws/ui/js/ui.js";

const root = createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        Hello world!
    </BrowserRouter>
);
```
#### 9. Don't forget to create public/ folder in root and copy your favicon.ico or assests in this folder.
#### 10. Finally run this command to start your project. Happy coding!
```
npm start
```

## By Nest Works Studio
[nestws.com](https://www.nestws.com)
