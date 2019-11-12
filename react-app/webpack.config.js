// Mainly by following webpack doc:
// https://webpack.js.org/guides/typescript/
const path = require('path');

// Config use for development. used by webpack-dev-server
const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // We have to serve our bundle from dist/bundle.js
    // Like specified in our index.html file
    // see: https://webpack.js.org/configuration/dev-server/#devserverpublicpath-
    publicPath: '/dist',
    port: 8800,
    hot: true
  }
};

const prodConfig = {
  mode: 'production'
};

module.exports = (env, argv) => {
  const config = {
    entry: './src/app.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    ...(argv.mode === 'production' ? prodConfig : devConfig)
  };
  console.log('webpack config loaded: ', config);
  return config;
};
