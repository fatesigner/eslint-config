/**
 * clean
 * clean build dir
 */

const Gulp = require('gulp');
const Rimraf = require('rimraf');

Gulp.task('clean', async function () {
  const ENV = require('../env')();
  Rimraf.sync(ENV.outputPath);
});
