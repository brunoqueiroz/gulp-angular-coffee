'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('injector',['scripts'], function() {
  return gulp.src('src/index.html')
    .pipe($.inject(gulp.src(['.tmp/{app,components}/**/*.js', 
                            '!.tmp/app/index.js',
                            '!.tmp/{app,components}/**/*.spec.js',
                            '!.tmp/{app,components}/**/*.tmpl.js',
                            '!.tmp/{app,components}/**/*.mock.js' ], {read: false}), {
      transform: function(filePath) {
        filePath = filePath.replace('/src/', '');
        filePath = filePath.replace('/.tmp/', '');
        return '<script src="' + filePath + '"></script>';
      }
    }))
    .pipe(gulp.dest('src'));
});