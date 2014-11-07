'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular/angular-route.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
        'src/{app,components}/**/*.js',
        'test/unit/** /*.js'
    ],

    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },

    plugins : [
        'karma-coffee-preprocessor',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });

};
