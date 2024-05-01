/**
 * @file
 * Provides Gulp configurations and tasks for Bootstrap for Drupal theme.
 */
'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function sync(done) {
  browserSync.init({
    files: [
    'assets/scss/style.scss'
    ],
    proxy: "https://ted-x-pipitea.lndo.site/",
    injectChanges: false
  })
  done();
}
function styles() {
  return gulp
    .src('assets/scss/style.scss')
    .pipe(sass({includePaths: ['scss']}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
}

function watchFiles() {
    gulp.watch('assets/scss/**/*.scss', styles)
}

gulp.task('default', gulp.series(sync, styles, watchFiles));