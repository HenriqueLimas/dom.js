'use strict';

let gulp = require('gulp');
let del = require('del');

let src = require('./sources');

gulp.task('clean', function(done) {
  return del(`./${src.dist}`, done);
});