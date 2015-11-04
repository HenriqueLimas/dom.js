'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();

let src = require('./sources');

gulp.task('lint', function() {
  return gulp.src(src.scripts.all)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});