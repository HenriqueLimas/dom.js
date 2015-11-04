'use strict';

let gulp = require('gulp');
let serve = require('./build/gulp-serve');
let test = require('./build/gulp-test');
let dist = require('./build/gulp-dist');

gulp.task('dist', dist);
gulp.task('test:unit', test.unit);
gulp.task('serve',['dist:dev'], serve);