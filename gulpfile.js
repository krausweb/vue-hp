const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css')

const paths = {
  srcJsVendor: ['./node_modules/highcharts/highcharts.js'],
  srcCssVendor: ['./node_modules/normalize.css/normalize.css', './node_modules/highcharts/css/highcharts.css'],
  srcImg: './src/assets/images/**/*',
  public: './dist',
  publicJs: './dist/js',
  publicCss: './dist/css',
  publicImg: './dist/images'
}

// Clean all public folder
gulp.task('clean', function () {
  return del([paths.publicJs, paths.publicCss, paths.publicImg])
})

// Minify and copy all Vendor JS
gulp.task('jsVendor', function () {
  return gulp.src(paths.srcJsVendor)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('vendors.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.publicJs))
})

// Concat and Minify all Vendor Css
gulp.task('cssVendor', function () {
  return gulp.src(paths.srcCssVendor)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(['last 4 versions', '>= 1%']))
    .pipe(cleanCSS())
    .pipe(concat('vendors.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.publicCss))
})

// Copy all static images
gulp.task('img', function () {
  return gulp.src(paths.srcImg)
    .pipe(imagemin({optimizationLevel: 1, verbose: true}))
    .pipe(gulp.dest(paths.publicImg))
})

/* ******************************** Main tasks ************************ */

// Return the task when a file changes
gulp.task('watch', function () {
  gulp.watch([paths.srcJsVendor], ['jsVendor'])
  gulp.watch([paths.srcCssVendor], ['cssVendor'])
  gulp.watch([paths.srcImg], ['img'])
})

// The default task
gulp.task('default', ['clean', 'jsVendor', 'cssVendor', 'img', 'watch'])
