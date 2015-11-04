'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();

let browserify = require('browserify');
let babelify = require('babelify');

let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');

let src = require('./sources');

gulp.task('scripts', function() {
  let b = browserify({
    entries: [src.scripts.main],
    debug: true
  }).transform(babelify);

  return b
    .bundle()
    .pipe(source(src.scripts.main))
    .pipe(buffer())
    .pipe($.rename(src.scripts.main_dist))
    .pipe(gulp.dest(src.dist_src));
});
