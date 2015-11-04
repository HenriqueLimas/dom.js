'use strict';

require('./gulp-scripts');
require('./gulp-lint');
require('./gulp-clean');
require('./gulp-test');

let gulp = require('gulp');
let runSequence = require('run-sequence');

gulp.task('dist:dev', (done) => {
  runSequence(
    ['clean'],
    ['scripts'],
    done
  );
});

module.exports = dist;

function dist(done) {
  runSequence(
    ['lint'],
    ['test:ci'],
    ['clean'],
    ['scripts'],
    done
  );
}