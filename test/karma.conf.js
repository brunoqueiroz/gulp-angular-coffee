'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular/angular-route.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
        'src/{app,components}/** /*.js',
        'test/unit/** /*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });

};
