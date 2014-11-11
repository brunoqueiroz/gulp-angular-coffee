'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles','injector:scripts'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['styles']);
  gulp.watch(['src/{app,components}/**/*.coffee', '!src/{app,components}/**/*.spec.coffee'], ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
