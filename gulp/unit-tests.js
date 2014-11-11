'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var argv = require('yargs').argv;

gulp.task('test', ['styles','injector'], function() {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    '.tmp/{app,components}/**/*.js',
    'src/{app,components}/**/*.spec.coffee',
    'src/{app,components}/**/*.spec.js',
    'src/{app,components}/**/*.html',
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: (argv.run ? 'run' : 'watch')
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
