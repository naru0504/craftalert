const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_env, args) => {

  const IS_PROD = args.p;

  const BUILD_PATH = 'dist';
  const JS_FILE_NAME = 'colorfulalert.min.js';
  const devtool = IS_PROD ? false : 'source-map';

  const plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    //new BundleAnalyzerPlugin(),
  ];

  if (IS_PROD) {
    plugins.push(
      new CopyWebpackPlugin([{
        from: 'colorfulalert.d.ts',
        to: '../typings/colorfulalert.d.ts',
      }])
    );
  }

  return {
    context: path.resolve(__dirname, 'src'),
    entry: './colorfulalert.js',
    plugins,

    output: {
      path: path.resolve(__dirname, BUILD_PATH),
      filename: JS_FILE_NAME,
      library: 'cral',
      libraryTarget: 'umd',
    },

    resolve: {
      extensions: [
        ".ts",
        ".js",
      ],
    },

    module: {
      rules: [
        {
          // Expose global cral() function
          test: require.resolve("./src/colorfulalert"),
          use: [{
            loader: 'expose-loader',
            options: 'colorfulalert'
          }, {
            loader: 'expose-loader',
            options: 'cral'
          }],
        },
        {
          enforce: 'pre',
          test: /\.ts?$/,
          loader: 'tslint-loader',
          options: {
            configFile: './tslint.json',
            typeCheck: true,
          },
          exclude: /(node_modules)/,
        },
        {
          /* Compile TypeScript */
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          /* Use PostCSS */
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                insertAt: 'top',
              },
            },
            { 
              loader: 'css-loader', 
              options: { 
                importLoaders: 1 
              } 
            },
            'postcss-loader',
          ]
        }
      ],
    },

    stats: {
      colors: true,
    },

    devtool,
  }
};
