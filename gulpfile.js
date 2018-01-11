const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  del = require('del'),
  connect = require('gulp-connect'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  ttf2woff = require('gulp-ttf2woff'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  ttf2eot = require('gulp-ttf2eot')

const paths = {
  srcJsVendor: ['./node_modules/highcharts/highcharts.js'],
  srcCssVendor: ['./node_modules/normalize.css/normalize.css', './node_modules/highcharts/css/highcharts.css'],
  srcSass: ['./src/assets/common.sass', './src/assets/sass/**/*'],
  srcImg: './src/assets/images/**/*',
  srcFonts: './src/assets/fonts/*.ttf',
  dist: './dist/assets',
  distJs: './dist/assets/js',
  distCss: './dist/assets/css',
  distImg: './dist/assets/images',
  distFonts: './dist/assets/fonts'
}

gulp.task('connect', function () {
  connect.server({
    name: 'Server start',
    root: paths.public,
    port: 8000,
    livereload: true
  })
})

// Clean all dist folder
gulp.task('clean', function () {
  return del(paths.dist)
})

// Minify and copy all Vendor JS
gulp.task('jsVendor', function () {
  return gulp.src(paths.srcJsVendor)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('vendors.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.distJs))
})

// Concat and Minify all Vendor Css
gulp.task('cssVendor', function () {
  return gulp.src(paths.srcCssVendor)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(['last 4 versions', '>= 1%']))
    .pipe(cleanCSS())
    .pipe(concat('vendors.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.distCss))
})

// Sass to Css and Minify
gulp.task('cssCommon', function () {
  return gulp.src(paths.srcSass)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(['last 4 versions', '>= 1%']))
    .pipe(cleanCSS())
    .pipe(concat('common.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.distCss))
    .pipe(connect.reload())
})

// Copy all static images
gulp.task('images', function () {
  return gulp.src(paths.srcImg)
    .pipe(imagemin({optimizationLevel: 1, verbose: true}))
    .pipe(gulp.dest(paths.distImg))
    .pipe(connect.reload())
})

// Generate and Copy All main browser Fonts type (woff, woff2, eot, ttf)
gulp.task('fonts', ['ttf2woff', 'ttf2woff2', 'ttf2eot'])
// generate ttf2woff + copy original ttf
gulp.task('ttf2woff', function () {
  gulp.src([paths.srcFonts])
    .pipe(ttf2woff({'clone': true}))
    .pipe(gulp.dest(paths.distFonts))
})
// generate ttf2woff2
gulp.task('ttf2woff2', function () {
  gulp.src([paths.srcFonts])
    .pipe(ttf2woff2())
    .pipe(gulp.dest(paths.distFonts))
})
// generate ttf2eot
gulp.task('ttf2eot', function () {
  gulp.src([paths.srcFonts])
    .pipe(ttf2eot())
    .pipe(gulp.dest(paths.distFonts))
})

/* ******************************** Main tasks ************************ */

// Return the task when a file changes
gulp.task('watch', function () {
  gulp.watch([paths.srcJsVendor], ['jsVendor'])
  gulp.watch([paths.srcCssVendor], ['cssVendor'])
  gulp.watch([paths.srcSass], ['cssCommon'])
  gulp.watch([paths.srcImg], ['images'])
})

// The default task
gulp.task('default', ['connect', 'jsVendor', 'cssVendor', 'cssCommon', 'images', 'fonts', 'watch'])
