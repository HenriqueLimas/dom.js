'use strict';

let gulp = require('gulp');
let Karma = require('karma').Server;

gulp.task('test:ci', ci);

module.exports = {
  unit: unit
};

function unit(done) {
  return new Karma({
    configFile: __dirname + '/../karma.conf.js'
  }, done).start();
}

function ci(done) {
  return new Karma({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
}
