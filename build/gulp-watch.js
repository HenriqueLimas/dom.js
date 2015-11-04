'use strict';

let gulp = require('gulp');
let reload = require('browser-sync').reload;

let src = require('./sources');

module.exports = watch;

function watch() {
  gulp.watch(src.scripts.all, ['scripts', reload]);
}
