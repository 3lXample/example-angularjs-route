// Karma configuration
// Generated on Fri Aug 18 2017 22:00:11 GMT+0700 (WIB)
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/module.js',
      'src/**/!(module).js',
    ],

    // list of files to exclude
    exclude: ['src/_vendor/**/*'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/!(*.spec).js': ['coverage'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'junit', 'coverage'],

    // configuration for test html report
    htmlReporter: {
      outputFile: 'reports/karma-html/result.html',
      pageTitle: 'Example AngularJS Web [Route] Unit Tests',
      subPageTitle: 'An example of web made with AngularJS route and NodeJS',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    // configuration for test junit report
    junitReporter: {
      outputDir: 'reports/karma-junit',
      outputFile: 'result.xml',
      suite: 'example-angularjs-route',
      useBrowserName: false,
      nameFormatter: function(browser, result) {
        return result.description;
      },
      classNameFormatter: function(browser, result) {
        return result.suite.join('.');
      }
    },

    // configuration for test coverage report
    coverageReporter: {
      dir: 'reports/karma-coverage',
      reporters: [
        { type: 'lcov',      subdir: '.' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
        { type: 'text-summary' }
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
