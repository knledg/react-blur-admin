var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      'test/**/*.js',
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap'],
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['es2015', 'react', 'stage-1'],
            },

          },
          {
            test: /\.json$/,
            loader: 'json',
          },
        ],
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'sinon': true,
      },
    },

    webpackServer: {
      noInfo: true, //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],


    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react', 'stage-1'],
      },
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};
