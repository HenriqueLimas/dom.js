'use strict';

let browserSync = require('browser-sync');

let watch = require('./gulp-watch');

let src = require('./sources');

module.exports = serve;

function serve() {
  browserSync({
    notify: false,
    server: {
      baseDir: [src.dist]
    },
    port: 9000
  });

  watch();
}