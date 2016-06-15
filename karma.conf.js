const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      'test/**/*.js',
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
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
      noInfo: true,
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-junit-reporter',
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

    junitReporter: {
      outputDir: process.env.CIRCLE_TEST_REPORTS || 'junit',
      useBrowserName: false,
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
